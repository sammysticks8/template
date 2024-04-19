import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Officiis, aliquam laudantium, sit vero facere libero iste ipsa, 
                 cumque animi aspernatur tempora qui asperiores sequi? Aliquid expedita
                 maiores nostrum voluptas corrupti.</p>
                 <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+772-8794-9872</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>United States</p>
                    </div>
                 </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
