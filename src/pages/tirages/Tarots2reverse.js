
import React, {} from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos3.jpg"; 
const pst2 = window.location.search;  
/* const reg= new RegExp("[ ,;]+", "g","?"); */


/* var array = pst.split("", 3);  */

/* var array = pst.replace('%3F', ' ? ').replace('+', '').slice(21, ).split('+').join(' '); */



var array = pst2.replace('%3F', ' ? ').replace('%21', '!').replace('%2C', ',').replace('%27', "'").replace('%C3%AF', 'ï').replace('%C3%AE', 'î').slice("10" ).split('+').join(' ');


/* var expressionReguliere = /[?&]?([^=]+)=([^&]*)/g; */

console.log(pst2);
function Tarots2reverse() {
  const alea =  Math.floor((Math.random() * 156) ); // Retourne un numéro de carte au hasard

  const alea2 =  Math.floor((Math.random() * 156) );

  const alea3 =  Math.floor((Math.random() * 156) );

  const alea4 =  Math.floor((Math.random() * 156) );

  const alea5 =  Math.floor((Math.random() * 156) );

  let history = useHistory();

const img = "../tarots/" + alea + ".jpg" ;    
const img2 = "../tarots/" + alea2 + ".jpg" ;    
const img3 = "../tarots/" + alea3 + ".jpg" ;    
const img4 = "../tarots/" + alea4 + ".jpg" ;    
const img5 = "../tarots/" + alea5 + ".jpg" ;    
  



    return (
     
      <div  className="background">



              
      <div className="navigation"> <button onClick={() => {
        history.push(`/cartestarotslignereverse`);
      } }> Poser une autre question </button>  <button onClick={() => {
        history.push(`/form3`);
      } }> Vers autres models </button>
      
      
      
      </div>



    



<div  className="ajustementenligne">


<div className="question">


<div className="test1">


<span value="" >  {array} </span>  </div>


<div className="test2">


<div className="anim">
   
      <img
          src={image}
          alt="Carte"
        />





  
        <img
          src={image}
          alt="Carte"
        />


        <img
          src={image}
          alt="Carte"
        />




        <img
          src={image}
          alt="Carte"
        />





        <img
          src={image}
          alt="Carte"
        />   
      
      </div>
      <div className="anim2">
<img
          src={img}
          alt="Carte"
        />





  
        <img
          src={img2}
          alt="Carte"
        />


        <img
          src={img3}
          alt="Carte"
        />




        <img
          src={img4}
          alt="Carte"
        />





        <img
          src={img5}
          alt="Carte"
        />   
      </div>
        
      </div>
      
      </div>
    
      </div>




<div className="navigation2"> <button onClick={() => {
        history.push(`/tarots2`);
      } }> Tirage même question </button>  <button onClick={() => {
        history.push(`/choix`);
      } }> Choix d'autres cartes </button>
      
      
      
      </div> </div>
    );
  }
  
  export default Tarots2reverse;
  