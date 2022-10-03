import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PeliculasSeries.css';

const Peliculas = () => {
  
  const [films, setfilms] = useState(null);
  const url = 'http://localhost:3001/api/pelis';

        useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then((json) => json.data)
          .then((data => setfilms(data))
            );
          
      }, []);

return (   
<div>
  <div class="container border rounded bg-light p-4 my-5">
    <div class="row">
    {films && (
          films.map((film) => {
            return (
      <div class="col titulopelicula"> 
      <Link to={`/Pelicula/${film.id}`}>
        <img src={film.foto} class="imgportadapeli" alt="Imagen no disponible"/>
      </Link>
        <p>{film.nombre}</p>
      </div>
          );
        })
    )}
    </div>
  </div>
</div>

  );
  
}

export default Peliculas;