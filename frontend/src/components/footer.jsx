import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
      

      

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', boxShadow:"0px 4px 8px 0px rgba(0,0,0,0.2)",   }}>
        © 2024 Copyright:
        <a id='footername' className='text-reset fw-bold footername-hover' href='https://www.linkedin.com/in/2rall/' target="_blank">
  Tural Shakarli
</a>
      </div>
    </MDBFooter>
  );
}