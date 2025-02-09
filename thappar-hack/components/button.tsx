import React from "react";
import { motion } from "framer-motion";

const Button = ({
  className = "",
  handleOnClick = () => {},
  label = "",
  animationProps = {},
}: { 
  className?: string; 
  handleOnClick?: () => void; 
  label?: string; 
  animationProps?: object; 
}) => {
  return (
    <motion.button 
      onClick={handleOnClick} 
      className={className} 
      {...animationProps} 
    >
      {label}
    </motion.button>
  );
};

export { Button };
