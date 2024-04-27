import CurvedText from 'react-curved-text';

export default function AboutFlex({writing, image, spaceCount}) {
  
    const spaces = Array(spaceCount).fill('\u00A0').join('');
  
    
    const spacedText = writing.split(' ').join(spaces);
  
    return (
      <div className="aboutflex" style={{backgroundImage: `url(${image})`}}>
        <CurvedText  
          textPathProps={{fill:"white", fontSize:"1.9em"}}
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
    );
  }
  