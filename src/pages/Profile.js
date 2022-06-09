import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

/* import LocalCafeIcon from "@material-ui/icons//LocalCafe"; */


function Profile() {
  let { id } = useParams();
  let history = useHistory();

  const [username, setUsername] = useState("");      //Set authState avec la réponse de basicinfo + Username
  const [photo_profil, setphoto_profil] = useState("");  //Set authState avec la réponse de basicinfo + Photo
  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {


    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }


    axios
      .get(`https://reves7.herokuapp.com/auth/basicinfo/${id}`)
      .then((response) => {
        setUsername(response.data.username);
        setphoto_profil(response.data.photo_profil);
      
      });

    axios
      .get(`https://reves7.herokuapp.com/posts/byuserId/${id}`)   //Retourne la liste des post par UserID + Set la clée  ListOfPost avec la liste des posts 
      .then((response) => {
        setListOfPosts(response.data);
     

      });




   
  }, []);




  return (
    <div className="grid">


      <h1> Page de profil public de : {username} </h1>
      <div className="profil">
      <img
          src={"https://reves7.herokuapp.com/images/" + photo_profil}
          alt="profil"
        />


{(authState.username === username || authState.admin === true) /* && (
              <>
         <form
                  action={"https://reves7.herokuapp.com/upload/" + id}
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div class="form-group">
                    <input
                      type="file"
                      name="file"
                      id="input-files"
                      class="form-control-file border"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary" >
                    Soumêtre l'image
                  </button>
                </form>    </> ) */}
      </div>


      <div className="boutonpriv">
        <button
          onClick={() => {
            history.push("/postpriv/" + id);
          }}
        >
        
          Voir la fiche de présentation
        </button>
      </div>
   

    
        <div className="listepostsparutilisateur">

{/* Map de la liste enegistrée dan l'autState avec la clée listOfPosts */}

        {listOfPosts.map((value, key) => {
          return (
      
            <div key={key} className="post3">
              <div className="title"> {value.title} </div>
              <div
                className="body"
                onClick={() => {
                  history.push(`/post/${value.id}`);
                }}
              >
                {value.postText}
              </div>

            <div className="iframdiv">
                <img id="imglien" className="lien"
                   
               
                  src={value.lien}
                
                
                />
              
</div>
         <div className="atarget">
<a target="blank" href={value.lien}>
                  {value.lien}
                </a>
             </div>
              <div className="footer">
                <div className="textfooter">
             {/*       {value.createdAt.replace('T', ' à ').slice(0, 18)} */}

           Le {new Intl.DateTimeFormat('local').format(value.createAt)}
                </div>

     {/*            <div className="buttons">
                  <div className="cofee ">
                    {" "}
                    <ThumbUpAltIcon />
                    <label className="labelcof"> {value.Likes.length}</label>
                  </div>
                </div> */}
              </div>
            </div>  
          );
        })}
      </div></div>
    
  );
}

export default Profile;
