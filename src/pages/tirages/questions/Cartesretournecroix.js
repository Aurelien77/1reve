

import image from "../../../logos/dos.jpg"; 
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";


const pst = window.location.search;  
/* const reg= new RegExp("[ ,;]+", "g","?"); */


/* var array = pst.split("", 3);  */

/* var array = pst.replace('%3F', ' ? ').replace('+', '').slice(21, ).split('+').join(' '); */


/* var array = pst.replace('%3F', ' ? ').replace('%21', '!').replace('%2C', ',').replace('%27', "'").replace('%C3%AF', 'ï').replace('%C3%AE', 'î').slice("5" ).split('+').join(' '); */


/* var expressionReguliere = /[?&]?([^=]+)=([^&]*)/g; */

console.log(pst);

function Cartesretournecroix() {

 

 /*  const [question, setQuestion] = useState(""); */
 /*    const alea =  Math.floor((Math.random() * 409) + 1); // Retourne un numéro de carte au hasard

    const alea2 =  Math.floor((Math.random() * 409) + 1);

    const alea3 =  Math.floor((Math.random() * 409) + 1);

    const alea4 =  Math.floor((Math.random() * 409) + 1);

    const alea5 =  Math.floor((Math.random() * 409) + 1);

    
*/
/* setQuestion({
  question : question,

  status: true,
}); */

let history = useHistory();

useEffect(() => {
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
}, []);

    return (
     
      <div  className="background">


  
<div className="navigationquestion">   <button onClick={() => {
                history.push(`/form`);
              } }> Vers autres models </button>
              
              
              
              </div>



              
      <div  className="ajustement">


     
      <div className="question grid-container">

      <span > 
  
  <input type="text" className="questiondiferente" id="question"  name="questiondif" />  
        
        
        <button value="OK" onClick={(test) => {
                  history.push(`/anim`);
                } }> OK </button>
  
  
  {/* <form action="/anim" className="flexrow">
   
  
          <fieldset>
  
        
            <input type="text" name="question" />
        
         
          
  
          </fieldset>   
          <button type="submit" value="OK" id="question">OK</button>
         
        </form> 
         */}
  
  
  
  
  
        </span> 

{/*  <EssayForm value="question" name="question" id="question" />  */}
  
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
  
  export default Cartesretournecroix;

