import React,{useRef} from 'react'
import Style from './Contact.module.scss'
import ClassNames from 'classnames'
//import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef() ;

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r1k0omq', 'template_f043j6o', form.current, 'hwoA6hn4X2mL1ck69')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("email submitted");
       
    };
  return (
    <div className={ClassNames(Style.container)}>
        
    <div className={ClassNames(Style.content)}>
      <div className={ClassNames(Style.left)}>
        <div className={ClassNames(Style.details)}>
        <i className="fa fa-map-marker" aria-hidden ="true"/>
          <div className={ClassNames(Style.topic)}>Address</div>
          <div className={ClassNames(Style.tone)}>Kigali</div>
          <div className={ClassNames(Style.ttwo)}>Rwanda</div>
        </div>
        <div className={ClassNames(Style.details)}>
        <i className="fa fa-phone" aria-hidden ="true"/>
          <div className={ClassNames(Style.topic)}>Phone</div>
          <div className={ClassNames(Style.tone)}>+250787087902</div>
          
        </div>
        <div className={ClassNames(Style.details)}>
        <i className="fa fa-envelope" aria-hidden ="true"/>
          <div className={ClassNames(Style.topic)}>Email</div>
          <div className={ClassNames(Style.tone)}>dhagenimana498@gmail.com</div>
          
        </div>
      </div>
      <div className={ClassNames(Style.right)}>
        <div className={ClassNames(Style.topic)}>Send a message</div>
       
      <form ref={form} onSubmit={sendEmail}>
        <div className={ClassNames(Style.input)}>
          <input type="text" placeholder="Enter your name" name="user_name" required/>
        </div>
        <div className={ClassNames(Style.input)}>
          <input type="text" placeholder="Enter your email" name="user_email" required/>
        </div>
        <div className={ClassNames(Style.input )}>
          <textarea placeholder="Message" className={ClassNames(Style.message)} name="message" required></textarea>
        </div>
        <div className={ClassNames(Style.button)}>
          <input type="submit" value="Send Now" name="submit" />
        </div>
      </form>
    </div>
    </div>
  </div>

   
  )
}
