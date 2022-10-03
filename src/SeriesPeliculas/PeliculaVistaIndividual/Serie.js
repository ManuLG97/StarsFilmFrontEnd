import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Pelicula.css';


const Serie = () => {

    const { id } = useParams();
    const [serie, setserie] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/series`)
        .then((x) => x.json())
        .then((y) => {
          const data = y.data;
          const seri = data.find((s) => s.id === Number(id));
          console.log(id, data);
          setserie(seri);
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
    {serie &&(

  <div class="row">
  
  <div class="col"> 

    <img class="imgportada" alt="Imagen no disponible" src={serie.foto} />
 
  </div>

    <div class="col">
        <span class="bolder"></span> {serie.nombre} ({serie.año_estreno})
         <br/> <br/>
         <span class="bolder">Director:</span> {serie.director}
         <br/> <br/>
         <span class="bolder">Reparto:</span> {serie.reparto}
         <br/> <br/>
        <span class="bolder">Plataforma:</span> {serie.plataforma} 
        <br/> <br/>
        <span class="bolder">Idiomas:</span> {serie.idioma} 
        <br/> <br/>  
        <span class="bolder"> Subtitulos:</span> {serie.subtitulos}
        <br/> <br/>  
        <span class="bolder"> Categoria:</span> {serie.categoria} y {serie.categoria2}
    </div>
    <div class="row"> 
    <div class="col">
    <br/><br/>
    <span class="bolder">Descripción: </span> {serie.descripcion} 
    <br/> <br/>
    </div>
    </div>
   </div>
    )}

   <br/>
   <Slider {...settings}>
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
        </Slider>
        <br/>
        <button className='boton'>
            <Link to='/Series'>Volver</Link>
        </button>
   </div>
   </div>
  );
}

export default Serie;