
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import model from "../logos/animal.jpg"; 

import model2 from "../logos/course.jpg"; 
import model3 from "../logos/tarot.jpg"; 

function Choix() {
    // Le Css est choix.scss

  let history = useHistory();


  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);




    return (
        <div className="choix">
        
        
     <p> Veuillez choisir un style de cartes </p> 
        
     
<div className="calquesdeschoix">


<div className="premier" onClick={() => {
                history.push(`/form`);
              }}>
      <img src={model} /> 
      
      <p>Animaux</p>
       </div>



       <div className="deuxieme" onClick={() => {
                history.push(`/form2`);
              }}>
      <img src={model2} /> 
      
      <p>Dixit</p>
       </div>

       <div className="troisieme" onClick={() => {
                history.push(`/form3`);
              }}>
      <img src={model3} /> 
      
      <p>Tarots</p>
       </div>
    
       </div>






          



        
        
        
     
         </div>
      
    );
  }
  
  export default Choix;
  