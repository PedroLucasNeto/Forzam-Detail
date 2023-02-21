import "./Contact.scss";
import {
  TbMail,
  TbBrandInstagram,
  TbMapPin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { useRef } from "react";
import { contactInfo } from "../../utils/email_keys";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sent = () =>
    toast("Email sent successfully!", {
      draggable: true,
      position: toast.POSITION.BOTTOM_LEFT,
    });

  const notSent = () =>
    toast("Email couldn't be sent. Please try again!", {
      draggable: true,
      position: toast.POSITION.BOTTOM_LEFT,
    });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        contactInfo.serviceId,
        contactInfo.templateId,
        form.current,
        contactInfo.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          sent();
          setTimeout(() => {}, 3000);
        },
        (error) => {
          notSent();
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact_section" className="contact_container">
      <ToastContainer />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form_container"
        action=""
      >
        <h2>Entre em contato!</h2>
        <label htmlFor="name">Nome</label>
        <input type="text" name="user_name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="subject" required />
        <label htmlFor="subject">Assunto</label>
        <input type="text" name="message" required />
        <label htmlFor="message">Mensagem</label>
        <textarea />
        <button type="submit">Enviar Mensagem</button>
      </form>

      <div className="info_container">
        <h2>Mais informações</h2>
        <ul>
          <li>
            <a href="https://goo.gl/maps/EeaPtah9x6UwcS3w8" target={"_blank"}>
              <TbMapPin />
              <h3>Endereço</h3>
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/message/J6XMXZTSP32ZD1?autoload=1&app_absent=0"
              target={"_blank"}
            >
              <TbBrandWhatsapp />
              <h3>WhatsApp</h3>
            </a>
          </li>

          <li>
            <a href="mailto:forzamdetail@gmail.com" target={"_blank"}>
              <TbMail />
              <h3>Email</h3>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/forzamdetail/?hl=pt-br"
              target={"_blank"}
            >
              <TbBrandInstagram />
              <h3>Instagram</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
