
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos.jpg"; 


function Animenvers() {
  var recupere = localStorage.getItem('Maquestion');


    const alea =  Math.floor((Math.random() * 156)); // Retourne un numéro de carte au hasard

    const alea2 =  Math.floor((Math.random() * 156));

    const alea3 =  Math.floor((Math.random() * 156));

    const alea4 =  Math.floor((Math.random() * 156));

    const alea5 =  Math.floor((Math.random() * 156));

    let history = useHistory();

const img = "./animaux/" + alea + ".jpg" ;    
const img2 = "./animaux/" + alea2 + ".jpg" ;    
const img3 = "./animaux/" + alea3 + ".jpg" ;    
const img4 = "./animaux/" + alea4 + ".jpg" ;    
const img5 = "./animaux/" + alea5 + ".jpg" ;    

useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);

    return (
     
      <div  className="background">


<div className="navigationreponse"> <button onClick={() => {
                history.push(`/form`);
              } }> Vers autres models </button>
              
              
              
              </div>
      <div  className="ajustement">


     
      <div className="question grid-container">



<span value="" id="spancroix">{recupere} 
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
      
      
<div className="navigationreponse"><button onClick={() => {
                history.push(`/animenvers`);
              } }> Tirage même question </button>  
              
              
              
              </div></div>
    );
  }
  
  export default Animenvers;
  