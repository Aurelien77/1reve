
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos2.jpg"; 




function Tirage() {
  var recupere = localStorage.getItem('Maquestion');
    const alea =  Math.floor((Math.random() * 410) ); // Retourne un numéro de carte au hasard

    const alea2 =  Math.floor((Math.random() * 410));

    const alea3 =  Math.floor((Math.random() * 410));

    const alea4 =  Math.floor((Math.random() * 410));

    const alea5 =  Math.floor((Math.random() * 410) );

    let history = useHistory();

const img = "./oracle/" + alea + ".jpg" ;    
const img2 = "./oracle/" + alea2 + ".jpg" ;    
const img3 = "./oracle/" + alea3 + ".jpg" ;    
const img4 = "./oracle/" + alea4 + ".jpg" ;    
const img5 = "./oracle/" + alea5 + ".jpg" ;    

useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);


    return (
     
      <div  className="background ">
<div className="navigationreponse"> <button onClick={() => {
                history.push(`/form2`);
              } }> Vers autres models </button>
              
              
              
              </div>



      <div  className="ajustement">


     
      <div className="question grid-container">



   
      <span value="" id="spancroix" > {recupere} 
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
                history.push(`/tirage`);
              } }> Tirage même question </button>  
              
              
              
              </div></div>
    );
  }
  
  export default Tirage;
  