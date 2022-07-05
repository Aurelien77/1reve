import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";



function Postpriv() {
  let { id } = useParams();
  let history = useHistory();
  const [username, setUsername2] = useState("");
  const [photo_profil, setphoto_profil] = useState("");
  const [listOfPosts, setListOfPosts2] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
    axios
      .get(`https://reves7.herokuapp.com/auth/postpriv/${id}`)
      .then((response) => {
        setUsername2(response.data.username);
        setphoto_profil(response.data.photo_profil);
      });

    axios
      .get(`https://reves7.herokuapp.com/posts/byuserIdpriv/${id}`)
      .then((response) => {
        setListOfPosts2(response.data);
      });
  }, []);


  return (
    <div className="grid">
      <h1> Fiche de : {username} </h1>
      <div className="profil">
        <img
         
          src={"https://reves7.herokuapp.com/images/" + photo_profil}
          alt="photo_profil"
        />
      </div>
    
        <div className="boutonpriv">
          {" "}
          {(authState.username === username || authState.prof === true) && (
            <>
                 <button className=""
                onClick={() => {
                  history.push("#");
                }}
              >
                {" "}
                Changer mon mots de passe
              </button> 



              <div className="listepostsparutilisateur">
        {listOfPosts.map((value, key) => {

const date = new Date(value.createdAt);
          return (
      
            <div key={key} className="post3">
              <div className="title"onClick={() => {
                  history.push(`/postsecondaire/${value.id}`);
                }}> {value.title} </div>
              <div
                className="body"
                onClick={() => {
                  history.push(`/postsecondaire/${value.id}`);
                }}
              >
                {value.postText}
              </div>
            <div className="iframdiv">
                <img
                  src={value.lien}
                
                ></img>
              
</div>

              <div className="footer">
                <div className="textfooter">
            
                {new Intl.DateTimeFormat('local').format(date)}
           
              
                </div>

              
              </div>
            </div>  
          );
        })}
      
      </div>

            </>
          )}
        </div>
      
  
      
      
      
      
      
      </div>
  );
}

export default Postpriv;
