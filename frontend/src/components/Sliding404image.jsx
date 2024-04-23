import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import PartOne from "../img/4041.png"
import PartTwo from "../img/4042.png"
import PartThree from "../img/4043.png"
import PartFour from "../img/4044.png"
import clsx from 'clsx';
const image = (
  <Paper sx={{ m: 1, width: 100, height: 100, bgcolor: 'transparent', borderTopLeftRadius: '10%' }} elevation={0}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: 'transparent',
        borderTopLeftRadius: '10%'
      }}
    >
      <img className='first-image404' src={PartOne} style={{borderTopLeftRadius: '10%'}} alt="" />
    </Box>
  </Paper>
);
const image4 = (
  <Paper sx={{ m: 1, width: 100, height: 100, bgcolor: 'transparent', borderTopRightRadius: '10%' }} elevation={0}>
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: 'transparent',
        borderTopRightRadius: '10%'
      }}
    >
      <img className='fourth-image404' src={PartTwo} style={{borderTopRightRadius: '10%'}}  alt="" />
    </Box>
  </Paper>
);
const image2 = (
  <Paper sx={{ m: 1, width: 100, height: 100, bgcolor: 'transparent', borderBottomLeftRadius: '10%' }} elevation={0}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: 'transparent',
        borderBottomLeftRadius: '10%'
      }}
    >
      <img className='second-image404' src={PartThree} style={{borderBottomLeftRadius: '10%'}}  alt="" />
    </Box>
  </Paper>
);
const image3 = (
  <Paper sx={{ m: 1, width: 100, height: 100, bgcolor: 'transparent', borderBottomRightRadius: '10%' }} elevation={0}>
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: 'transparent',
        borderBottomRightRadius: '10%'
      }}
    >
      <img className='third-image404' src={PartFour} style={{borderBottomRightRadius: '10%'}} alt="" />
    </Box>
  </Paper>
);

export default function Emptysearchslide() {
  const [checked, setChecked] = React.useState(true);

  return (
    <Box 
      sx={{
        display: 'grid',
        gridTemplateColumns:"1fr 1fr",
        gridTemplateRows:"1fr 1fr",
        justifyContent: 'center',
        alignItems: 'center',
        
        bgcolor: 'transparent',
        
        borderRadius:"10%",
        
        '&.parentBox':{}
      }}
      className={clsx('parentBox404')}
    >
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 500 }}>
        {image} 
      </Slide>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 500 }}>
        {image4} 
      </Slide>
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 500 }}>
        {image2} 
      </Slide>
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 500 }}>
        {image3} 
      </Slide>
    </Box>
  );
}