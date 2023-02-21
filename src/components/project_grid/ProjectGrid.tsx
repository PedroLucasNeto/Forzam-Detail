import { Project } from "../../types/Project";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "./ProjectGrid.scss";

interface ProjectGridProps {
  project: Project;
}

const ProjectGrid = ({ project }: ProjectGridProps) => {
  if (!project) {
    return null;
  }

  const { description, images } = project;

  const galeryRef = useRef(null);
  const isInView = useInView(galeryRef);

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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={galeryRef}
      className="images_grid"
      variants={container}
      initial="hidden"
      animate={"visible"}
    >
      {images.map((url, index) => (
        <motion.img
          variants={item}
          key={index}
          src={url}
          alt={"imagem do veículo" + description}
        />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
