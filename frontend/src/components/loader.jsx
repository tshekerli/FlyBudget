import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

 function Variants() {
  return (
    <Stack>
      
      <Skeleton variant="ractangular" width={250} height={400} />
    </Stack>
  );
}


export default function Loader(){
    return(
        <div style={{
            display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "baseline",
          alignContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop:'2rem',
          gap: "2rem",
          height:'100%',
          width:'100%'
          }}>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
            <div className='loaderskeleton'><Variants/></div>
           
        </div>
    )
}