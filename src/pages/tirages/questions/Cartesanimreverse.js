

import image from "../../../logos/dos.jpg"; 
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import FlavorForm from "../../Formulaire";

const pst = window.location.search;  


console.log(pst);

function Cartesanimreverse() {

 



  

let history = useHistory();
useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);

 

    return (
     
      <div  className="background ">


<div className="navigationquestion">   <button onClick={() => {
                history.push(`/form`);
              } }> Vers autres models </button>
              
              
              
              </div>


              
      <div  className="ajustement">


     
      <div className="question grid-container">




<span > 

<FlavorForm />
        
        <button value="OK" onClick={() => {
                  history.push(`/animenvers`);
                } }> OK </button>

      
      </span>   
<div className="haut">
<div className="grid-item">
    
<img
          src={image}
          alt="Carte"
        />

</div></div>

<div className="centre ">

  <div className="grid-item">
  <img
          src={image}
          alt="Carte"
        />

</div>
<div className="grid-item">
<img
          src={image}
          alt="Carte"
        />



</div><div className="grid-item">
<img
          src={image}
          alt="Carte"
        />
</div>
</div>
<div className="bas" >

<div className="grid-item" >
<img
          src={image}
          alt="Carte"
        />


       </div></div>
        
       
      
       
      </div></div>
      
      
      
      <div className="navigationquestion">   <button onClick={() => {
                history.push(`/choix`);
              } }> Choix d'autres cartes </button>
              
              
              
              </div></div>
    );
  }
  
  export default Cartesanimreverse;

