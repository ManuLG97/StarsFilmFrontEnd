import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImHome } from "react-icons/im";



const Footer = () => {

  
  const navigate = useNavigate();

  const GoToSeries = () => {
      navigate('/Series', {
          replace: true
      });
    }

  const GoToPeliculas = () => {
      navigate('/Peliculas', {
          replace: true
        });  
      }
    
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><ImHome/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" onClick={GoToPeliculas}>Peliculas </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={GoToSeries}>Series</a>
      </li>
    </ul>
    </div>
</nav>
</div> 

  );
}

export default Footer;