/* import "./App.css"; */





import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Home from "./pages/Home";
import Priv from "./pages/Priv";
import CreatePost from "./pages/CreatePost";
import Createpostpriv from "./pages/CreatePostpriv";
import Post from "./pages/Post";
import Post2 from "./pages/Post2";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Delete from "./pages/Delete";
import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import Postpriv from "./pages/Postpriv";
import FlavorForm from "./pages/Formulaire";

//Partie tirage 

//Choisir un modéle

import Formquestion from "./pages/tirages/modeles/Form.js";
import Formquestion2 from "./pages/tirages/modeles/Form2.js";
import Formquestion3 from "./pages/tirages/modeles/Form3.js";
  
import choix from "./pages/Choix";
//Poser une question 



import Cartesretournecroix from "./pages/tirages/questions/Cartesretournecroix.js";
import Cartesanimreverse from "./pages/tirages/questions/Cartesanimreverse.js";
import Cartesanimlign from "./pages/tirages/questions/Cartesanimlign";
import Cartesanimlignretourn from "./pages/tirages/questions/Cartesanimlignretourn";


//Avoir une réponse 


import Anim from "./pages/tirages/Anim";
import Anim2 from "./pages/tirages/Anim2";
import Anim3 from "./pages/tirages/Anim3";
import Animenvers from "./pages/tirages/animenvers";

//Poser une question 

import Cartestiragecroix from "./pages/tirages/questions/Cartestiragecroix";

import Cartestirageligne from "./pages/tirages/questions/Cartestirageligne";

//Avoir une réponse 


import Tirage from "./pages/tirages/Tirage.js";
import Tirage2 from "./pages/tirages/Tirage2";


//Partie Tarots





//Poser une question 
import Cartestarotscroix from "./pages/tirages/questions/Cartestarotscroix";
import Cartestarotscroixreverse from "./pages/tirages/questions/Cartestarotscroixreverse";
import Cartestarotsligne from "./pages/tirages/questions/Cartestarotsligne";
import Cartestarotslignereverse from "./pages/tirages/questions/Cartestarotslignereverse";

//Avoir une réponse 

import Tarots from "./pages/tirages/Tarots";

import Tarotsrenverse from "./pages/tirages/Tarotsrenverse";




import Tarots2 from "./pages/tirages/Tarots2";

import Tarots2reverse from "./pages/tirages/Tarots2reverse";















import EssayForm from "./pages/component/textarea";



import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";




function App() {  
  const [authState, setAuthState] = useState({
    username: "",
  /*   email: "", */
    id: 0,
    photo_profil: "",
    prof: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("https://reves7.herokuapp.com/auth/auth", {
        //backend : auth(app)/auth(route)
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });



        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            photo_profil: response.data.photo_profil,
           /*  email: response.data.email, */
            prof: response.data.prof,
            status: true,
          });
        }
      });
  }, [] );
 
  const logout = () => {
   
   
    localStorage.removeItem("accessToken");
    
    
    setAuthState({ /* email: "", */ username: "", prof: "", id: 0, status: false });
  
  
   
  
  };
 
  return (
    <div className="ajust">
      <AuthContext.Provider value={{authState, setAuthState }} >
        <Router>
          
        
            
         
              <div className="barredenavigation">  
              
              
              <div className="apparitionbarrecontexte">
<ul>  <li id="button" className="bouton">{authState.status && (
                <button onClick={logout}>⚪ Déconnexion</button>
              )}</li>








<li id="username" className="username">   {!authState.prof && authState.username && (



                  <Link to={`/postpriv/${authState.id}`}> 🪴
                    {authState.username}
                  </Link>




                )}
                
                
                {authState.prof && (
                  <Link to={`/profile/${authState.id}`}>🪴
                    {authState.username}
                  </Link>
                )}
                
                
                </li>



<li className="fil" >{authState.status && <Link to="/Home"> ✨Fils d'actualités</Link>}</li>



<li className="creerprive">   {authState.status && (
                  <Link to="/createpostpriv">🪶 Créer un Post Privé</Link>
                )}</li>

<li className="priv" >{authState.status && (
                  <Link to={`/postpriv/${authState.id}`}>
                    ​📜​Mes Posts Privés
                  </Link>
                )}</li>





<li className="tirage" >{authState.status && (
                  <Link to="/choix">
                   🃏 Tirages
                   </Link>
                )}</li>









            
           
          
          <li id="postpublic" className="public">  {authState.prof && (
                  <Link to="/createpost"> 📝Créer un Post Public</Link>
                )}
           </li>
              </ul>  
      
            </div>




            {!authState.status && (
              <>
                {" "}
              
             <ul>

             <li><Link to="/registration">💎 S'enregistrer</Link></li>  
                 <li> <Link to="/login"> ☀️Connexion</Link></li>
               
                
                 
              
                  
                  <li><Link to="/Accueil">🏛 Accueil</Link></li>  
                  </ul> 
              </>  
            )} 
             
        </div> 
          <Switch>
           
            <Route path="/priv" exact component={Priv} />
          


{/* Vers la page d'un post ---------------------------------------------------------------------------------------------------------individuel section Public*/}


            <Route path="/post/:id" exact component={Post} /> {/*   Page du post individuelle public  */}
            
            

            {/* Partie tirage*/}

            <Route path="/essayForm" exact component={EssayForm} />

                {/* Partie anim questions*/}

            <Route path="/cartescroix" exact component={Cartesretournecroix} />


            <Route path="/Cartesanimlign" exact component={Cartesanimlign} />
            
            <Route path="/Cartesanimlignretourn" exact component={Cartesanimlignretourn} />

            <Route path="/cartesanimreverse" exact component={Cartesanimreverse} />

                {/* Partie anim reponses*/}


            <Route path="/animenvers" exact component={Animenvers} />


            <Route path="/anim" exact component={Anim} />
            <Route path="/anim2" exact component={Anim2} />
            <Route path="/anim3" exact component={Anim3} />





           
            
            
           


 {/* Partie illustrations*/}
            <Route path="/tirage" exact component={Tirage} />
            <Route path="/tirage2" exact component={Tirage2} />

         

         
           

            
            <Route path="/cartestiragecroix" exact component={Cartestiragecroix} />
            
          <Route path="/cartestirageligne" exact component={Cartestirageligne} />
        {/*     <Route path="/cartestiragecroix" exact component={Cartestirageligne} />
            <Route path="/cartestiragecroix" exact component={Cartestirageligneretourne} /> */}
           
           

     
{/* Partie tarots */}


            <Route path="/tarots2" exact component={Tarots2} />



<Route path="/cartestarotscroix" exact component={Cartestarotscroix} />
<Route path="/tarots" exact component={Tarots} />



<Route path="/cartestarotscroixreverse" exact component={Cartestarotscroixreverse} />



<Route path="/tarotsrenverse" exact component={Tarotsrenverse} />


<Route path="/cartestarotsligne" exact component={Cartestarotsligne} />
<Route path="/cartestarotslignereverse" exact component={Cartestarotslignereverse} />



<Route path="/tarots2reverse" exact component={Tarots2reverse} />




<Route path="/FlavorForm" exact component={FlavorForm} />

            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/createpost" exact component={CreatePost} />

{/* Vers la page d'un poste individuel section Personelle */}

            <Route path="/postsecondaire/:id" exact component={Post2} />   {/*   Page du post individuelle privé */}

            <Route path="/postpriv/:id" exact component={Postpriv} />
            <Route path="/changepassword" exact component={ChangePassword} />
            <Route path="/createpostpriv" exact component={Createpostpriv} />
{/* Login et enregisrement utilisateur  */}
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
 
            <Route path="/Accueil" exact component={Accueil} />
            <Route path="/Home" exact component={Home} />
            <Route path="/" exact component={Accueil} />

            <Route path="/form" exact component={Formquestion} />

            
            <Route path="/form2" exact component={Formquestion2} />
            <Route path="/form3" exact component={Formquestion3} />
            
            <Route path="/choix" exact component={choix} />
         
            <Route path="/delete" exact component={Delete} />
           
            <Route path="/recherche2" exact component={Recherche} />
       

            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>  
      </div>
     );
}  

export default App;
