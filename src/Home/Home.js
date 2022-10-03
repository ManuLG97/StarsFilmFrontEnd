import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cuarentaydossegundos from '../img/42segundos.jpg';
import dragonballsuper2022pelicula from '../img/DragonBallSuperSuperHero.jpg';
import amsterdam from '../img/amsterdam.jpg';
import brucewillis from '../img/actores/brucewillis.jpg';
import thomasiangriffith from '../img/actores/thomasiangriffith.jpg';
import millyalcock from '../img/actores/millyalcock.jpg';
import jasontatham from '../img/actores/jasonstatham.jpg';
import mattsmith from '../img/actores/mattsmith.jpg';
import karatekidfoto from '../img/thekaratekid.jpg';
import rockybalboa from '../img/rockybalboa1.jpg';
import elseñordelosanillos from '../img/elseñordelosanillos.jpg';
import IndianaJones from '../img/IndianaJonesLostArk.jpg';
import CinderellaMan from '../img/CinderellaManElhombre.jpg'
import CobraKai from '../img/cobrakai.jpg';
import lacasadeldragon from '../img/lacasadeldragon.jpeg';
import JuegoDeTronos from '../img/juegodetronos.jpg';
import JuegoDeTronosNoticia from '../img/juegodetronosnoticia.jpg';
import JuegoDelCalamar from '../img/juegodelcalamar.jpeg';
import BreakingBad from '../img/breakingbad.jpg';
import Creed from '../img/creed.jpg';
import ElCamino from '../img/elcamino.jpg';
import TadeoJones3 from '../img/TadeoJones3.jpg';
import ViajeAlParaiso from '../img/Viajealparaiso.jpg';

const Home = () => {

  let settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   cssEase: "linear"
}

  return(
    <div>
        <div class="container p-3 my-3 border rounded bg-light">
    <div class="row">
    <div class="col"> 
      <p>NOTICIAS</p>
     </div>
     </div>
     <div class="row">
     <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgnoticia" src={JuegoDeTronosNoticia} />
                        <div class="centradonoticias">  Juego de Tronos ya es la serie mas vista de la historia, un triunfo para la plataforma HBO </div>
                        </div>
                   
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgnoticia" src={ElCamino} />
                        <div class="centradonoticias"> El camino es la pelicula de netflix mas vista en la historia de la plataforma </div>
                    </div>
                    </div>
            </div>
            <div className="card-wrapper contenedor">
                <div className="card">
                    <div className="card-image">
                        <img class="imgnoticia" src={Creed} />
                        <div class="centradonoticias"> Creed III, la épica secuela de Michael B. Jordan, se ha retrasado hasta 2023. La próxima secuela de Creed 
                         se esperaba originalmente para el próximo el 23 de noviembre,
                         pero ahora se ha retrasado hasta el 3 de marzo de 2023 
                      </div>
                    </div>
                  
                </div>
            </div>

        </Slider>
        


  </div>
  <br/>
  </div>



    <div class="container p-3 my-3 border rounded bg-light">
    <div class="row">
    <div class="col"> 
      <p>CARTELERA</p>
     </div>
     </div>
     <div class="row">
    <div class="col"> 
    <img src={cuarentaydossegundos} class="imgportadapeli" alt="Logo42segundos" />
     </div>
     <div class="col"> 
     <img src={dragonballsuper2022pelicula} class="imgportadapeli" alt="LogoDragonBallSuperHero" />
  </div>
  <div class="col"> 
     <img src={TadeoJones3} class="imgportadapeli" alt="LogoTadeoJones3" />
  </div>
  <div class="col"> 
     <img src={ViajeAlParaiso} class="imgportadapeli" alt="LogoViajeAlParaiso" />
  </div>
  
  </div>
  </div>

  <div class="container p-3 my-3  border rounded bg-light">
    <div class="row">
    <div class="col"> 
      <p>TRÁILERS DESTACADOS</p>
     </div>
  </div>
    <div class="row">
    <div class="col"> 
    
        <ReactPlayer
          url='https://www.youtube.com/watch?v=uoHYirZqG48'
          className='react-player'
          width='620px'
          height='400px'
          controls
        />
        </div>
        <br/>
        <div class="col"> 
        <ReactPlayer
          url='https://www.youtube.com/watch?v=2dI-iGoYhAw'
          className='react-player'
          width='620px'
          height='400px'
          controls
        />
         </div>

        
      </div>
     </div>

   
  <div class="container p-3 my-3  border rounded bg-light">
    <div class="row">
    <div class="col"> 
      <p>PROXIMOS ESTRENOS</p>
     </div>
     </div>
     <div class="row">
    <div class="col"> 
    <img src={amsterdam} class="imgportadapeli" alt="LogoAmsterdamPelicula" />
     </div>
  </div>
  </div> 

  <div class="container p-3 my-3 bo border rounded bg-lightrder">
  <div class="row">
    <div class="col"> 
      <p>TOP ACTORES SEGUN LA COMUNIDAD</p>
     </div>
     </div>
     <div class="row">
    <div class="col contenedor"> 
    <img src={brucewillis} class="imagenactores" alt="bruce willis foto" />
    <div class="centrado"> 1 </div>
</div>
     
     <div class="col contenedor"> 
    <img src={thomasiangriffith} class="imagenactores" alt="thomas ian griffith foto" />
    <div class="centrado"> 2 </div>
     </div>
     <div class="col contenedor"> 
    <img src={mattsmith} class="imagenactores" alt="matt smith foto" />
    <div class="centrado"> 3 </div>
     </div>
     <div class="col contenedor"> 
    <img src={millyalcock} class="imagenactores" alt="milly alcock foto" />
    <div class="centrado"> 4 </div>
     </div>
     <div class="col contenedor"> 
    <img src={jasontatham} class="imagenactores" alt="jason tatham foto" />
    <div class="centrado"> 5 </div>
     </div>
  </div>
  </div>  


  <div class="container p-3 my-3  border rounded bg-light">
  <div class="row">
    <div class="col"> 
      <p>TOP PELICULAS SEGUN LA COMUNIDAD</p>
     </div>
     </div>
     <div class="row">
    <div class="col contenedor"> 
    <img src={rockybalboa} class="imagenactores" alt="rocky balboa foto" />
    <div class="centrado"> 1 </div>
</div> 
     <div class="col contenedor"> 
    <img src={karatekidfoto} class="imagenactores" alt="karate kid foto" />
    <div class="centrado"> 2 </div>
     </div>
     <div class="col contenedor"> 
    <img src={elseñordelosanillos} class="imagenactores" alt="el señor de los anillos foto" />
    <div class="centrado"> 3 </div>
     </div>
     <div class="col contenedor"> 
    <img src={IndianaJones} class="imagenactores" alt="Indiana Jones foto" />
    <div class="centrado"> 4 </div>
     </div>
     <div class="col contenedor"> 
    <img src={CinderellaMan} class="imagenactores" alt="Cinderella Man foto" />
    <div class="centrado"> 5 </div>
     </div>
  </div>
  </div> 

  <div class="container p-3 my-3  border rounded bg-light">
  <div class="row">
    <div class="col"> 
      <p>TOP SERIES SEGUN LA COMUNIDAD</p>
     </div>
     </div>
     <div class="row">
    <div class="col contenedor"> 
    <img src={CobraKai} class="imagenactores" alt="CobraKai foto" />
    <div class="centrado"> 1 </div>
</div> 
     <div class="col contenedor"> 
    <img src={JuegoDeTronos} class="imagenactores" alt="Juego De Tronos foto" />
    <div class="centrado"> 2 </div> 
     </div>
     <div class="col contenedor"> 
    <img src={BreakingBad} class="imagenactores" alt="Breaking Bad foto" />
    <div class="centrado"> 3 </div>
     </div>
     <div class="col contenedor"> 
    <img src={JuegoDelCalamar} class="imagenactores" alt="Juego Del Calamar foto" />
    <div class="centrado"> 4 </div>
     </div>
     <div class="col contenedor"> 
    <img src={lacasadeldragon} class="imagenactores" alt="la casa del dragon foto" />
    <div class="centrado"> 5 </div>
     </div>
  </div>
  </div> 



<br/>

  </div>
       
  );
}

export default Home;