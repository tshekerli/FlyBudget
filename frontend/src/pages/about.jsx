import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import ScrollAnimation from '../components/scrollanimation';

function About () {
    useEffect(() => {
        
        window.scrollTo(0, 0);
        
        
    }, []);

    return (
        <div style={{position:'relative', }}>
            <ScrollAnimation>
                <Navbar/>
                
            </ScrollAnimation>
           
            
        </div>
    )
}

export default About;