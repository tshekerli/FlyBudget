import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion"


function ScrollAnimation({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const controls = useAnimation();
    const slidecontrols = useAnimation();
    
    useEffect(() => {
        if (isInView){
            controls.start("visible");
            slidecontrols.start("visible");
        }
    }, [isInView]);
    
    return (
        <div ref={ref} style={{position:'relative'}}>
            <motion.div 
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate={controls}
        transition={{duration: 0.5, delay:0.2}}
        
        >
            {children}
        </motion.div>
        <motion.div
        variants={{
            hidden:{left:0},
            visible:{left:"100%"}
        }}
        initial="hidden"
        animate= {slidecontrols}
        transition={{duration:0.5, ease: 'easeIn'}}
        style={{position:"absolute",
        top:4,
        bottom:4,
        left:0,
        right:0,
        background:"#F0F0F0",
        zIndex:20,
        
    }}
        >

        </motion.div>
        </div>
    )
}

export default ScrollAnimation;