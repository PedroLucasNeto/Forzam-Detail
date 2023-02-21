import "./Footer.scss";
import { TbMail, TbBrandInstagram, TbBrandWhatsapp } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer_container">
      <span className="text_space">
        Desenvolvido por
        <a href="https://codingforfree.netlify.com" target={"_blank"}>
          <span className="text_space color"> Coding For Free</span>
        </a>
      </span>
    </div>
  );
};

export default Footer;
