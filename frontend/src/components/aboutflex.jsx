import CurvedText from 'react-curved-text';
import ScrollAnimation from './scrollanimation';

export default function AboutFlex({writing, image, spaceCount, fontsize, color}) {
  
    const spaces = Array(spaceCount).fill('\u00A0').join('');
  
    const spacedText = writing.split(' ').join(spaces);
  
    return (
      <ScrollAnimation>
        <div className="aboutflex" style={{backgroundImage: `url(${image})`}}>
        <CurvedText  
          textPathProps={{fill:color, fontSize: fontsize}}
          reversed="true"
          text={spacedText}
          width={300} 
          height={300} 
          cx={150} 
          cy={150} 
          rx={100} 
          ry={100}
        />
      </div>
      </ScrollAnimation>
    );
}