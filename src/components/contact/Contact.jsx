import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [messageSent, setMeassageSent] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8re3rqj',
        'template_g6dpjde',
        form.current,
        '6Z-d9bUjIqFCqFnzG',
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            setMeassageSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact-container">
        <div className="contact-description">
          <p>
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder=" Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Write me something..."
            required
          />
          {messageSent && <p>Message successfuly sent</p>}
          {messageSent === false && (
            <p>
              Oops! Could not sent your message, please check your connection
              and try again!
            </p>
          )}
          <button type="submit" className="btn">
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
