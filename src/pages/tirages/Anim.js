
import React, {} from "react";
import { useHistory } from "react-router-dom";
import EssayForm from "../component/textarea";

import image from "../../logos/dos.jpg"; 


const pst = window.location.search;  

/* const reg= new RegExp("[ ,;]+", "g","?"); */


/* var array = pst.split("", 3);  */

/* var array = pst.replace('%3F', ' ? ').replace('+', '').slice(21, ).split('+').join(' '); */


/* var array = pst.replace('%3F', ' ? ').replace('%21', '!').replace('%2C', ',').replace('%C3%', '').replace('%27', "'").replace('%C3%AF', 'ï').replace('%C3%AE', 'î').slice("10" ).split('+').join(' ');  */


  var array = document.getElementsByClassName('question').value; 
/* var expressionReguliere = /[?&]?([^=]+)=([^&]*)/g; */

console.log(pst);
function Anim() {
  

/*   console.log("authState");
  console.log(authState); */
    const alea =  Math.floor((Math.random() * 78)); // Retourne un numéro de carte au hasard

    const alea2 =  Math.floor((Math.random() * 78));

    const alea3 =  Math.floor((Math.random() * 78) );

    const alea4 =  Math.floor((Math.random() * 78) );

    const alea5 =  Math.floor((Math.random() * 78));

    let history = useHistory();

const img = "./animaux/" + alea + ".jpg" ;    
const img2 = "./animaux/" + alea2 + ".jpg" ;    
const img3 = "./animaux/" + alea3 + ".jpg" ;    
const img4 = "./animaux/" + alea4 + ".jpg" ;    
const img5 = "./animaux/" + alea5 + ".jpg" ;    



    return (
     
      <div  className="background">


<div className="navigation"> <button onClick={() => {
                history.push(`/cartescroix`);
              } }> Poser une autre question </button>  <button onClick={() => {
                history.push(`/form`);
              } }> Vers autres models </button></div>
      <div  className="ajustement">


     
      <div className="question grid-container">



      <span value="" > {/* {recupere} */}  {array}
  </span>

<div className="animcroix">
<div className="haut">

    
<img
          src={img}
          alt="Carte"
        />

</div>

<div className="centre">


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

</div>
<div className="bas">


        <img
          src={img5}
          alt="Carte"
        />   
       </div>
        
       </div>

       <div className="animcroix2">
<div className="haut">

    
<img
          src={image}
          alt="Carte"
        />

</div>

<div className="centre">


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
<div className="bas">


        <img
          src={image}
          alt="Carte"
        />   
       </div>
        
       </div>
      
       
      </div>
      
      </div>
      
      
      
      <div className="navigation2">  
      
      <div className="navigation"> <button onClick={() => {
                history.push(`/anim`);
              } }> Tirage même question </button> </div>
      
      
      <button onClick={() => {
                history.push(`/choix`);
              } }>Choix d'autres cartes</button>  </div></div>
    );
  }
  
  export default Anim;
  