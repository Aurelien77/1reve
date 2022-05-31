
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos.jpg"; 

const pst = window.location.search;  



console.log(pst);
function Anim2() {
  
  var recupere = localStorage.getItem('Maquestion');

    const alea =  Math.floor((Math.random() * 78)); // Retourne un numéro de carte au hasard

    const alea2 =  Math.floor((Math.random() * 78));

    const alea3 =  Math.floor((Math.random() * 78));

    const alea4 =  Math.floor((Math.random() * 78));

    const alea5 =  Math.floor((Math.random() * 78));

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
      <div  className="ajustementenligne">
   
  
     <div className="question">
     

      <div className="test1">


<span value="" >{recupere}  </span>  </div>

  
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
      <div className="navigationreponse"><button onClick={() => {
                history.push(`/anim2`);
              } }> Tirage même question </button>  
              
              
              
              </div>
      </div>
      
      
     
      
  
    );
  }
  
  export default Anim2;
  

