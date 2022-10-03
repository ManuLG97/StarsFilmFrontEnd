import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Pelicula.css';


const Pelicula = () => {

    const { id } = useParams();
    const [pelicula, setpelicula] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/pelis`)
        .then((x) => x.json())
        .then((y) => {
          const data = y.data;
          const peli = data.find((p) => p.id === Number(id));
          console.log(id, data);
          setpelicula(peli);
        });
    }, [id]);

   let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear"
}

return (   
    <div>
    
    <br/>
    <div class="container p-3 my-3  border rounded bg-light">
    {pelicula &&(

  <div class="row">
  
  <div class="col"> 

    <img class="imgportada" alt="LogoRockyBalboa" src={pelicula.foto} />
 
  </div>

    <div class="col">
        <span class="bolder"></span> {pelicula.nombre} ({pelicula.año_estreno})
         <br/> <br/>
        <span class="bolder">Director:</span> {pelicula.director}
        <br/> <br/>
        <span class="bolder">Reparto:</span> {pelicula.reparto}
        <br/> <br/>
        <span class="bolder">Plataforma:</span> {pelicula.plataforma} 
        <br/> <br/>
        <span class="bolder">Idiomas:</span> {pelicula.idioma}
        <br/> <br/>
        <span class="bolder"> Subtitulos:</span> {pelicula.subtitulos}
        <br/> <br/>
        <span class="bolder"> Categoria:</span> {pelicula.categoria} y {pelicula.categoria2}


    </div>
    <div class="row"> 
    <div class="col">
    <br/><br/>
    <span class="bolder">Descripción: </span> {pelicula.descripcion} 
    <br/> <br/>
    </div>
    </div>
   </div>
    )}

   <br/>
   {/* <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                   
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                    </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                  
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" />
                    </div>
                    
                </div>
            </div>
        </Slider> */}
        <br/>
        <button className='boton'>
            <Link to='/Peliculas'>Volver</Link>
        </button>
   </div>
   </div>
  );
}

export default Pelicula;