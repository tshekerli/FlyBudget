import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import First from "../img/about/first.jpg";

export default function AboutFlex() {
  const textRef = useRef(null);
  const circleText = "Who We Are";

  useEffect(() => {
    gsap.to(textRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear"
    });
  }, []);

  return (
    <div className="aboutflex" style={{backgroundImage: `url(${First})`}}>
      {circleText.split("").map((char, index) => (
        <span
          key={index}
          style={{ transform: `rotate(${index * (360 / circleText.length)}deg)` }}
          className="rotate-text"
        >
          {char}
        </span>
      ))}
    </div>
  );
}