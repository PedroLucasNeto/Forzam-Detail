import "./About.scss";

const About = () => {
  return (
    <section id="about_section" className="about_section">
      <div className="description_box">
        <h2>Sobre Nós</h2>
        <p>
          Nosso time é composto por profissionais dedicados e apaixonados pelo
          que fazem, garantindo que cada detalhamento seja feito com a máxima
          atenção e cuidado. Nós entendemos a importância de seu veículo para
          você e fazemos de tudo para preservá-lo e mantê-lo em excelentes
          condições.
        </p>
        <p>
          Em resumo, nós estamos comprometidos em oferecer aos nossos clientes o
          melhor em termos de detalhamentos automotivo, garantindo
          profissionalismo, dedicação, atenção, cuidado e limpeza.
        </p>
        <p>
          Entre em contato conosco hoje mesmo para agendar seu detalhamento!
        </p>
      </div>
      <img src="/assets/img/about_us.jpg" alt="" />
    </section>
  );
};

export default About;
