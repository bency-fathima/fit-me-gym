import React, { useRef } from "react";
import './Join.css'
import emailjs from '@emailjs/browser'

export default function Join() {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr/>
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" placeholder="Your Email" name="user_email" required />
            <button className="btn btn-j" type="submit">JOIN NOW</button>
          
        </form>
      </div>
    </div>
  );
}
