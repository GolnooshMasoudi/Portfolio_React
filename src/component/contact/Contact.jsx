import React from "react";
import "./contact.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
//--------------------for emailjs---------------
import emailjs from "@emailjs/browser";

const Contact = () => {
  //--------------------for emailjs---------------
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7br4soe",
        "template_0zef1zh",
        form.current,
        "GwfJ_Lb8sB4ru-zAC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  //----------------------------------------------
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMarkEmailRead className="contact-icon" />
            <h4>Email</h4>
            <h5>masoudi.golnoosh@hyperisland.se</h5>
            <a
              href="mailto:masoudi.golnoosh@hyperisland.se"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <AiOutlineWhatsApp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+46728339553</h5>
            <a
              href="https://api.whatsapp.com/send?phone=46728339553"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <FaLinkedin className="contact-icon" />
            <h4>Linkedin</h4>
            <h5>/in/nooshi-masoudi-b654a865/</h5>
            <a
              href="https://github.com/GolnooshMasoudi"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* --------------------for emailjs--------------- */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
