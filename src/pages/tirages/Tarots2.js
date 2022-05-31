
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../../logos/dos3.jpg"; 



function Tarots2() {
  var recupere = localStorage.getItem('Maquestion');
  const alea =  Math.floor((Math.random() * 77) ); // Retourne un numéro de carte au hasard

  const alea2 =  Math.floor((Math.random() * 77) );

  const alea3 =  Math.floor((Math.random() * 77) );

  const alea4 =  Math.floor((Math.random() * 77) );

  const alea5 =  Math.floor((Math.random() * 77) );

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



    



<div  className="ajustementenligne">


<div className="question">


<div className="test1">


<span value="" > {recupere}  </span>  </div>


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
                history.push(`/tarots2`);
              } }> Tirage même question </button>  
              
              
              
              </div> </div>
    );
  }
  
  export default Tarots2;
  