import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ce champ est requis.";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Le nom ne doit pas contenir de chiffres.";
    } else if (formData.name.length > 50) {
      newErrors.name = "Le nom ne peut pas dépasser 50 caractères.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Ce champ est requis.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères valides.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_abkssb5",
        "template_wrtbq1c",
        formData,
        "qRTjlf9u4bxkcAd4g"
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setIsSending(false);
        setIsSent(true);
        recaptchaRef.current.reset(); // Réinitialise le captcha
        setTimeout(() => setIsSent(false), 4000);
      })
      .catch(() => {
        setIsSending(false);
        alert("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <section className="contact">
      <h2>
        DÉMARRONS UN PROJET ENSEMBLE,<br />
        N'HÉSITEZ PAS À ME CONTACTER
      </h2>

      <div className="home__separator"></div>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__field">
          <label htmlFor="name">Nom & Prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="contact__error">{errors.name}</span>}
        </div>

        <div className="contact__field">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="contact__error">{errors.email}</span>}
        </div>

        <div className="contact__field">
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="contact__error">{errors.message}</span>}
        </div>

        <div className="contact__field">
          <ReCAPTCHA
            sitekey="6LejdkUrAAAAAO9hye65o58sBPDi3yIccQPGTB6U"
            ref={recaptchaRef}
          />
        </div>

        <button
          type="submit"
          className={`contact__button ${isSending ? "sending" : ""} ${isSent ? "sent" : ""}`}
          disabled={isSending}
        >
          {isSending ? "Envoi..." : isSent ? "Envoyé !" : "Envoyer"}
        </button>
      </form>
    </section>
  );
}