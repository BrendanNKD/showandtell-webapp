import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Animation = ({delay,location=-500,minheight=200,maxheight=500}:IProps) => 
{

    const getRandomNumber = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    
    const [key, setKey] = useState(0);
    const [initialY, setInitialY] = useState(getRandomNumber(minheight, maxheight));
    
  
    const animationVariants = {
      initial: { x: location, y: getRandomNumber(minheight, maxheight) },
      animate: { x: 2200 },
    };
  
    const handleAnimationComplete = () => {
      // Animation complete logic
      setInitialY(getRandomNumber(0, 1000));
      setKey(key + 1);
      console.log("animation complete!")
    };

    return(
        <motion.div
        key={key}
        animate="animate"
        initial="initial"
        style={{ position: "absolute", zIndex: -1 }}
        variants={animationVariants}
        transition={{ duration: 40.0, delay: delay}}
        onAnimationComplete={handleAnimationComplete}
      >
        <img
          className="w-30"
          alt="Frame"
          src="https://c.animaapp.com/ERt8OH5Z/img/vector.svg"
        />
      </motion.div>)
};

interface IProps {
delay : number
location? : number
minheight? : number
maxheight? : number

}