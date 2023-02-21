import "./NavBar.scss";

interface NavBarProps {
  isOpened: boolean;
}

const NavBar = ({ isOpened }: NavBarProps) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <ul className={`navbar ${isOpened ? "opened" : "closed"}`}>
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
  );
};

export default NavBar;
