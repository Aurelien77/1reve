import React from "react";
import axios from "axios";
 import "../css/style.css";  
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
  

import "bootstrap/dist/css/bootstrap.min.css";



function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    } else {
      
      axios
        .get("https://reves7.herokuapp.com/posts", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
         
          setListOfPosts(response.data.listOfPosts);
        
          setLikedPosts(
            response.data.likedPosts.map((like) => {
              //Map argument de tableau
              return like.PostId;
            })
          );
        });
    }
  }, []);

 
  const likeAPost = (postId) => {
    axios
      .post(
        "https://reves7.herokuapp.com/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setListOfPosts(
          listOfPosts.map((post) => {
            //Map argument de tableau
            if (post.id === postId) {




              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );

        if (likedPosts.includes(postId)) {
          setLikedPosts(
            likedPosts.filter((id) => {
              return id !== postId;
            })
          );
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
      });   
  };
 




  return ( <div>
    
    <div className="animation">
     


     <div class="animation__bloc">
           <div class="animation__ball animation__ball1"><i class="fas"></i></div>
           <div class="animation__ball animation__ball2"> <i class="fas"></i></div>
           <div class="animation__ball animation__ball3"><i class="fas"></i></div>
         </div> 
         </div>
 
        <div className="containerpost">  





   












      {listOfPosts.map((value, key) => {

       
        //Map argument de tableau
        return (
     
        
























          
          <div  key={key}  className="post ">



           
            <div className="title"   onClick={() => {
                history.push(`/post/${value.id}`);
              }}> {value.title} </div>
            <div
              className="body"
              onClick={() => {
                history.push(`/post/${value.id}`);
              }}
            >
              {value.postText}
            







            <div className="iframdiv">
            <iframe  className="lien"
             
                src={value.lien}
                
                  allowfullscreen ="true"
              
                ></iframe>
              
           
              
              </div>




              
              <div className="atarget">
              <a target="blank" href={value.lien}>
                {value.lien}
              </a>
   </div>
            <div>
         
           </div> </div> 
              
            
            

            <div className="footer">
                <Link to={`/profile/${value.UserId}`}>
                <span >
                  Cr???? par  {value.username}</span> <br></br> <span className="date">
                  {/*  {value.createdAt.toString().replace(/T/g, '  ').slice(0, 20)}  */}
                   {new Intl.DateTimeFormat('local').format(value.createAt)}
                   
                   
                   </span> 
                </Link>
          <div className="ThumbUpAltIcon">
                <ThumbUpAltIcon
                  onClick={() => {
                    likeAPost(value.id);
                  }}
                  className={
                    likedPosts.includes(value.id) ? "delike" : "like"
                  }
                />
                <label className="white"> {value.Likes.length}</label>
           
















           
            </div>       
            
            
            
            
    
</div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div> 




            
         
        );
      })}

  
    </div>  </div>
   
  );
}

export default Home;
