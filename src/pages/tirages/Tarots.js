
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos3.jpg"; 




function Tarots() {
  var recupere = localStorage.getItem('Maquestion');

  const alea =  Math.floor((Math.random() * 76) + 1); // Retourne un numéro de carte au hasard

  const alea2 =  Math.floor((Math.random() * 76) + 1);

  const alea3 =  Math.floor((Math.random() * 76) + 1);

  const alea4 =  Math.floor((Math.random() * 76) + 1);

  const alea5 =  Math.floor((Math.random() * 76) + 1);
  let history = useHistory();
 

const img = "../tarots/" + alea + ".jpg" ;    
const img2 = "../tarots/" + alea2 + ".jpg" ;    
const img3 = "../tarots/" + alea3 + ".jpg" ;    
const img4 = "../tarots/" + alea4 + ".jpg" ;    
const img5 = "../tarots/" + alea5 + ".jpg" ;    

useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);

    return (
     
      <div  className="background">
 <div className="navigationreponse"> <button onClick={() => {
                history.push(`/form3`);
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
          alt=""
        />

</div>

<div className="centre">


        <img
          src={img2}
          alt=""
        />



        <img
          src={img3}
          alt=""
        />




        <img
          src={img4}
          alt=""
        />

</div>
<div className="bas">


        <img
          src={img5}
          alt=""
        />   
       </div>
        
       </div>

       <div className="animcroix2">
<div className="haut">

    
<img
          src={image}
          alt=""
        />

</div>

<div className="centre">


        <img
          src={image}
          alt=""
        />



        <img
          src={image}
          alt=""
        />




        <img
          src={image}
          alt=""
        />

</div>
<div className="bas">


        <img
          src={image}
          alt=""
        />   
       </div>
        
       </div>
      
       
      </div>
      
      </div>
      
      
      
      <div className="navigationreponse"><button onClick={() => {
                history.push(`/tarots`);
              } }> Tirage même question </button>  
              
              
              
              </div></div>
    );
  }
  
  export default Tarots;
  