@echo off
cd /d "%~dp0"
call npm start > npm_start.log 2>&1
