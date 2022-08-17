import React, {useRef} from 'react'
import './style.css'
import emailjs from '@emailjs/browser';

const Contact= () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
  }

  return (
    <section>
        <div className="card">
            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name='name' required/>
                <input type="email" name="email" placeholder='Email' required/>
                <input type="text" placeholder='Subject' name='subject' required/>
                <textarea name="message" cols="30" rows="10"></textarea>
                <button className='' type='submit'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact