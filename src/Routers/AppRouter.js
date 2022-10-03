import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Series from '../SeriesPeliculas/Series'
import Peliculas from '../SeriesPeliculas/Peliculas'
import Pelicula from '../SeriesPeliculas/PeliculaVistaIndividual/Pelicula'
import Serie from '../SeriesPeliculas/PeliculaVistaIndividual/Serie'
import AboutUs from '../AboutUs/AboutUs';

//Los routers son el mecanísmo del código que irá haciendo el cambio de los componentes, la redirección de los path por decirlo de alguna manera.

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                
            <Route path="/" element={<Home />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Peliculas" element={<Peliculas />} />  
            <Route path="/Pelicula/:id" element={<Pelicula />} /> 
            <Route path="/Serie/:id" element={<Serie />} />  
            <Route path="/AboutUs" element={<AboutUs />} />  
               
            </Routes>

        <Footer/>
        </BrowserRouter>
    )
}