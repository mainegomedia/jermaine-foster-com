import React from 'react'
import '../Styles/form.css'


const Form = () => {

  function sendMessage() {
    console.log('message sent');
  }

  return (
    <div className='formDiv'>
      <form action="https://formsubmit.co/mainegomedia@gmail.com" method="POST">
        <p className='formText' alt='name'>Name</p>
        <input type='text' name='name' className='name' placeholder='Name' required></input> <br/>

        <p className='formText' alt='form field'>Email</p>
        <input type='email' name='email' className='email' placeholder='Email' required></input> <br/>

        <p className='formText' alt='form field'>Talk to Me</p>
        <textarea type='text' name='text' className='text' placeholder='Write your message here'></textarea> <br/>

        <button type='submit' className='submitButton' alt='submit button' onClick={ sendMessage }>Submit</button>
      </form>
    </div>
  )
}

export default Form