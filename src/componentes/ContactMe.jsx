import React from "react";
import { useState } from "react";
//email.js
import emailjs from "emailjs-com";
//Style
import "../index.css";
//Icon
import {
  UilPhone,
  UilEnvelopeHeart,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";
//import controler email
import Joi from "joi";

const ContactMe = () => {
  //Joi
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const nameValidation = Joi.object({
    name: Joi.string().min(3).messages({
      "string.min": "Name's length must be at least 3 characters",
    }),
  });
  const emailValidation = Joi.object({
    email: Joi.string().min(1).message({
      "string.min": "This field is required",
    }),
  });
  const messageValidation = Joi.object({
    message: Joi.string().min(1).message({
      "string.min": "This field is required",
    }),
  });
  const formValidation = Joi.object({
    name: Joi.string().min(3).messages({
      "string.min": "Name's length must be at least 3 characters",
    }),
    email: Joi.string().min(1).messages({
      "string.min": "This field is required",
    }),
    message: Joi.string().min(1).messages({
      "string.min": "This field is required",
    }),
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeName = (e) => {
    const { error } = nameValidation.validate({ name: e.target.value });
    setFormValues({ ...formValues, name: e.target.value });
    setFormErrors({
      ...formErrors,
      name: error ? error.details[0].message : "",
    });
  };

  const handleChangeEmail = (e) => {
    const { error } = emailValidation.validate({ email: e.target.value });
    setFormValues({ ...formValues, email: e.target.value });
    setFormErrors({
      ...formErrors,
      email: error ? error.details[0].message : "",
    });
  };

  const handleChangeMessage = (e) => {
    const { error } = messageValidation.validate({ message: e.target.value });
    setFormValues({ ...formValues, message: e.target.value });
    setFormErrors({
      ...formErrors,
      message: error ? error.details[0].message : "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { error: errorGeneral } = formValidation.validate(formValues);
    if (errorGeneral) {
      console.log("error");
    } else {
      emailjs
        .send(
          "service_xcixd08",
          "template_qr13e6p",
          {
            from_name: formValues.name,
            from_email: formValues.email,
            message: formValues.message,
          },
          "DbwsbP5QqqRtkCVAu"
        )
        .then((response) => {
          console.log("Correo enviado", response);
        })
        .catch((error) => {
          console.error("Error al enviar el correo", error);
        });
    }
  };

  return (
    <main className="main">
      {/* Contact Me */}
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div className="">
            <div className="contact__information">
              <UilPhone className="contact__icon" />

              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">(+57) 301 353 3775</span>
              </div>
            </div>

            <div className="contact__information">
              <UilEnvelopeHeart className="contact__icon" />

              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">ofwatwa@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <UilMapMarker className="contact__icon" />

              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Colombia - Nariño</span>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input
                  value={formValues.name}
                  onChange={handleChangeName}
                  name="name"
                  type="text"
                  className="contact__input"
                />
                {formErrors.name || <h2> {formErrors.name} </h2>}
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input
                  value={formValues.email}
                  onChange={handleChangeEmail}
                  name="email"
                  type="email"
                  className="contact__input"
                />
              {formErrors.email || <h2> {formErrors.email} </h2>}
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Message
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChangeMessage}
                id=""
                cols="0"
                rows="7"
                className="contact__input"
              ></textarea>
              {formErrors.message || <h2> {formErrors.message} </h2>}
            </div>
            <div>
              <button
                className="button--send button button--flex"
                type="submit"
              >
                Send Message <UilMessage className="button__icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
