
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FlavorForm from "../../Formulaire";
import image from "../../../logos/dos2.jpg"; 



const pst = window.location.search;  



console.log(pst);
function Cartestirageligne() {
  


   

    let history = useHistory();

 
    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        history.push("/login");
      }
    }, []);
    


    return (
     
      <div  className="background">



              
<div className="navigationquestion">   <button onClick={() => {
                history.push(`/form2`);
              } }> Vers autres models </button>
              
              
              
              </div>



            



              <div  className="ajustementenligne">
      
  
      <div className="question">
      
 
       <div className="test1">
 
 
       <span >  <FlavorForm />
       <button value="OK" onClick={() => {
                history.push(`/tirage2`);
              } }> OK </button>

         
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
       
      
      
     
      
       <div className="navigationquestion">   <button onClick={() => {
                history.push(`/choix`);
              } }> Choix d'autres cartes </button>
              
              
              
              </div> </div>
    );
  }
  
  export default Cartestirageligne;
  

