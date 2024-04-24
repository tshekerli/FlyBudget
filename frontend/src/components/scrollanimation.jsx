import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion"

function ScrollAnimation({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView){
            controls.start("visible");
        }
    }, [isInView]);
    
    return (
        <motion.div 
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate={controls}
        transition={{duration: 0.5}}
        ref={ref}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAnimation;