import React from 'react'

function Contact() {
  return (
    <div className='contact-page'>
      <h1 className='contact-title'>Get in touch</h1>
      <p className='contact-para'>
        Have any questions? Feel free to reach out to us.
      </p>
      <div className="contact-container">
        <form action="" className='contact-form'>
            <input type="text" placeholder='Enter your Name' required/>
            <input type="email" placeholder='Enter your Email' required/>
            <textarea placeholder='Message' rows={5} required></textarea>
            <button type='submit' className='contact-button'>Send Message</button>
        </form>
        <div className="contact-info">
            <p><strong>Location :</strong>Visakhapatnam, Andhra Pradesh</p>
            <p><strong>Phone :</strong>+91 79811 89032</p>
            <p><strong>Email :</strong> info@travelsnapshot.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
