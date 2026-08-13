const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

try {
  console.log('Deploying to GitHub Pages...');
  
  const buildDir = path.join(__dirname, 'build');
  
  if (!fs.existsSync(buildDir)) {
    throw new Error('Build folder not found. Run "npm run build" first.');
  }

  // Checkout gh-pages branch
  console.log('Switching to gh-pages branch...');
  try {
    execSync('git checkout gh-pages', { stdio: 'pipe' });
  } catch (e) {
    execSync('git checkout -b gh-pages origin/gh-pages', { stdio: 'pipe' });
  }
  
  // Remove all tracked files except .git
  console.log('Clearing old files...');
  try {
    execSync('git rm -r .', { stdio: 'pipe', shell: true });
  } catch (e) {
    // Ignore errors
  }
  
  // Copy build contents to root
  console.log('Copying build files...');
  const files = fs.readdirSync(buildDir);
  files.forEach(file => {
    const src = path.join(buildDir, file);
    const dest = path.join(__dirname, file);
    if (fs.lstatSync(src).isDirectory()) {
      copyDirSync(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  });
  
  // Add all files
  console.log('Staging files...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit
  console.log('Committing changes...');
  try {
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  } catch (e) {
    console.log('No changes to commit');
  }
  
  // Push to gh-pages
  console.log('Pushing to gh-pages...');
  execSync('git push origin gh-pages', { stdio: 'inherit' });
  
  // Switch back to main
  console.log('Switching back to main branch...');
  execSync('git checkout main', { stdio: 'pipe' });
  
  console.log('✅ Deployment successful!');
  console.log('Your site is live at: https://mainegomedia.github.io/jermaine-foster-com/');
  
  process.exit(0);
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}



