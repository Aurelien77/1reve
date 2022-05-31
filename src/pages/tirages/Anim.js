
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import image from "../../logos/dos.jpg"; 




function Anim() {
  
  var recupere = localStorage.getItem('Maquestion');

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

useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);

    return (
     
      <div  className="background">


<div className="navigationreponse"> <button onClick={() => {
                history.push(`/form`);
              } }> Vers autres modèles </button>
              
              
              
              </div>
      <div  className="ajustement">


     
      <div className="question grid-container">



      <span value="" id="spancroix"> {recupere} 
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
     {/*  {console.log("state.value")}
      {console.log(authState.username)} */}
       
      <div className="navigationreponse"><button onClick={() => {
                history.push(`/anim`);
              } }> Tirage même question </button>  
              
              
              
              </div></div>
    );
  }
  
  export default Anim;
  