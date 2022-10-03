import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs'

export default function Footer() {

  const navigate = useNavigate();

  const GoToAboutUs = () => {
      navigate('/AboutUs', {
          replace: true
      });
    }



  return (
    <div className="main">
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
         <center><b><MDBIcon icon="users" className="me-2"  onClick={GoToAboutUs} /><a onClick={GoToAboutUs}> About us</a></b></center>
        </div>
                <div>
          <a href='https://es-es.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>


      <div className='text-right p-4 bg-color-gray' >
        © 2022 Copyright [StartFilm]
      </div>
    </MDBFooter>
    </div>
  );
}