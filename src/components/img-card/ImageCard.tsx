import "./ImageCard.scss";
import { Service } from "../../types/Service";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImageCardProps {
  imageCard: Service;
}

const ImageCard = ({ imageCard }: ImageCardProps) => {
  if (!imageCard) {
    return null;
  }

  const { name, description, picture } = imageCard;

  const divRef = useRef(null);
  const isInView = useInView(divRef);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={divRef}
      className="card_container"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
    >
      <motion.div className="service_container" variants={item}>
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="know_more">
          <a href="#contact_section">Saiba Mais</a>
        </button>
      </motion.div>
      <motion.img
        src={picture}
        alt=""
        className="image_display"
        variants={item}
      />
    </motion.div>
  );
};

export default ImageCard;
