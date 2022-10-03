import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


import useHover from "@react-hook/hover";
import { styles } from "@dash-ui/styles";



function AboutUs() {


      
  const navigate = useNavigate();




    
return (   
    <div className="mainaboutus">
    <MDBContainer bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        
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

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="info" className="me-3" />
                StarFilm
              </h6>
              <p>
                A continuación dejamos los enlaces a los github y linkedin de los programadores de este projecto!
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><MDBIcon fas icon="external-link-square-alt" className="me-2"/>Manuel López</h6>
            <p>
                <a href='https://github.com/ManuLG97' className='text-reset'><MDBIcon fab icon="github" className="me-2"/>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/manuell%C3%B3pezgonz%C3%A1lez/' className='text-reset'><MDBIcon fab icon="linkedin" className="me-2" />
                  Linkedin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><MDBIcon fas icon="external-link-square-alt" className="me-2"/>Andy Sarmiento</h6>
            <p>
                <a href='https://github.com/gandyrst' className='text-reset'><MDBIcon fab icon="github" className="me-2"/>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/andysarsan-developer/' className='text-reset'><MDBIcon fab icon="linkedin" className="me-2" />
                  Linkedin
                </a>
              </p>
            </MDBCol>

          </MDBRow>
          <MDBRow className='mt-3'>
            <MDBCol md="8" lg="2" xl="8" className='mx-auto mb-8'>
       
        <p>En StartFilm trabajamos para que en España la gente que habla en idiomas como Catalán, Euskera o Gallego,
             tengan fácil encontrar donde ver sus películas o series favoritas en el idioma que deseen y 
             también para que los inmigrantes en España ya sean Latinos o de otras zonas,
             sepan que películas y series pueden ver en su idioma sabiendo que en las plataformas de streming
              los idiomas dependen muchas veces del pais que uno se encuentre y con esta web no tendrán que usar un VPN.</p>

            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

    </MDBContainer>
    <div><p></p></div>
    </div>
  );
  
}




export default AboutUs;