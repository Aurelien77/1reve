
import React, {} from "react";
import { useHistory } from "react-router-dom";
import bougie from "../../../logos/bougie.gif"; 
import croix from "../../../logos/croix.jpg"; 
import ligne from "../../../logos/ligne.jpg";  
function Formquestion2() {
    
  let history = useHistory();

    return (
  



<div className="imagesmodels">

        <p> Veuillez choisir un modèle de tirage</p>

<div className="horizon">

        <div className="croix2modules" onClick={() => {
                history.push(`/cartestiragecroix`);
              }}>
      <img src={croix} /> 
      <p>Tirage en croix, cartes uniquements à l'endroits</p>
      
      </div>

    {/*   <div className="croix" onClick={() => {
                history.push(`/`);
              }}>
      <img src={croix} /> 
      <p>Tirage en croix, cartes à l'endroits et à l'envers</p>
      
      </div> */}


      <div className="ligne2modules"  onClick={() => {
                history.push(`/cartestirageligne`);
              }}>
      <img src={ligne} /> 
      
      <p>Tirage en ligne, cartes uniquements à l'endroits</p>
       </div>
    
     
      
     {/*  <div className="ligne" onClick={() => {
                history.push(`/cartesanimlignretourn`);
              }}>
      <img src={ligne} /> 
      
      <p>Tirage en croix, cartes à l'endroits et à l'envers</p>
       </div> */}
    
      </div>

      <div className="bougie" onClick={() => {
                history.push(`/choix`);
              }}>
        <img src={bougie} /> 
      
      <p>Retour</p>
       </div>
      
      
      
   
     
      
      </div>   
  
    );
  }
  
  export default Formquestion2;
  