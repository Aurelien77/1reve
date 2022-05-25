
import React, {} from "react";
import { useHistory } from "react-router-dom";

import image from "../../../logos/dos3.jpg"; 



const pst = window.location.search;  

/* const reg= new RegExp("[ ,;]+", "g","?"); */


/* var array = pst.split("", 3);  */

/* var array = pst.replace('%3F', ' ? ').replace('+', '').slice(21, ).split('+').join(' '); */


var array = pst.replace('%3F', ' ? ').replace('%21', '!').replace('%2C', ',').replace('%C3%', '').replace('%27', "'").replace('%C3%AF', 'ï').replace('%C3%AE', 'î').slice("10" ).split('+').join(' '); 


/*   var recupere = document.getElementsByName('question').value;  */
/* var expressionReguliere = /[?&]?([^=]+)=([^&]*)/g; */

console.log(pst);
function Cartestarotslignereverse() {
  

/*   console.log("authState");
  console.log(authState); */
   

    let history = useHistory();

 



    return (
     
      <div  className="background">



              
              <div className="navigation">   <button onClick={() => {
                history.push(`/tarots2reverse`);
              } }> Vers autres models </button>
              
              
              
              </div>



            



      <div  className="ajustementenligne">
      
  
     <div className="question">
     

      <div className="test1">


      <span > 
  
      <form action="/tarots2reverse" className="flexrow">
    
   
    <fieldset>
    {/*   <legend></legend> */}
  
      <input type="text" name="question"  />
  
   
    

    </fieldset>   
    <button type="submit" value="OK" id="question">OK</button>
   
  </form> 
  
  </span>        </div>


<div className="test2">



<div className="animquestion">
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
</div>

</div>

</div>
      
     
      
      <div className="navigation2">   <button onClick={() => {
                history.push(`/choix`);
              } }> Choix d'autres cartes </button>
              
              
              
              </div> </div>
    );
  }
  
  export default Cartestarotslignereverse;
  

