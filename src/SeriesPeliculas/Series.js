import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PeliculasSeries.css';

const Series = () => {
  const [series, setseries] = useState(null);
  const url = 'http://localhost:3001/api/series';

        useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then((json) => json.data)
          .then((data => setseries(data)));
      }, []);

return (
    <div> 
      <div class="container border rounded bg-light p-4 my-5">
        <div class="row">
          {series && (
          series.map((serie) => {
            return (
          <div class="col titulopelicula">
            <Link to = {`/Serie/${serie.id}`}>
              <img class="imgportadaserie" src={serie.foto} alt="Imagen no disponible" />
            </Link>
            <p>{serie.nombre}</p>
          </div>
            );
            })
        )}
        </div>
      </div>
    </div>
  );
}

export default Series;