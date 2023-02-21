import { useState } from "react";
import ToggleButton from "../../shared/toggle-button/ToggleButton";
import NavBar from "../navbar/NavBar";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <div className="header_container">
        <a href="#" onClick={() => handleClick}>
          <img
            src="/assets/img/forzam_icon.png"
            alt="Logo da forzam_detail"
            className="forzam_logo"
          />
        </a>
        <ul className="header_nav">
          <li>
            <a
              href="#services_section"
              onClick={() => {
                handleClick;
              }}
            >
              Serviços
            </a>
          </li>
          <li>
            <a href="#about_section" onClick={() => handleClick}>
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#contact_section" onClick={() => handleClick}>
              Contato
            </a>
          </li>
        </ul>
        <ToggleButton isActive={isActive} onToggle={setIsActive} />
      </div>
      <NavBar isOpened={isActive} />
    </>
  );
};

export default Header;
