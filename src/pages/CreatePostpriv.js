import { useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import * as Yup from "yup";

/* 
import './App.css' */

async function postImage({image, description, text}) {

  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
  formData.append("text", text)



/*   console.log("formData.append");
  console.log(formData.append); */

  const result = await axios.post('https://reves7.herokuapp.com/images', formData, { headers: {'Content-Type': 'multipart/form-data',  accessToken: localStorage.getItem("accessToken")}})









  
  console.log(result.data);
  return result.data;
 



};


function CreatePost() {


















  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);



  const [file, setFile] = useState()   // Set le state avec le nom du fichier 

  const [description, setDescription] = useState("") // Set le state avec la decritpion entrer dans input text


  const [text, setText] = useState("") 




  const [images, setImages] = useState([])

  const submit = async event => {

    event.preventDefault()

    const result = await postImage({image: file, description, text})

    setImages([result.imagePath, ...images])

   /*  console.log("Le resultat de SUBMIT ");
    console.log(result.imagePath); */

      history.push(`/Home`);

 



  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="createPostPage">

<div className="formContainer">

<form  onSubmit={submit} >

      <div className="POSTPRIVE">Créer un post <span>PRIVE</span></div>
      <label>Title: </label>
{/* 
      <ErrorMessage name="title" component="span" />
 */}
        <input value={description} onChange={e => setDescription(e.target.value)} type="text" id="title" required/>
       
       
       
       
       
       
       
        <label>Post:  </label>

      {/*   <ErrorMessage name="text" component="span" /> */}





         <input value={text} onChange={i => setText(i.target.value)} type="text" id="text" minlength="4" maxlength="200" size="10"  required/>


        {/*  <ErrorMessage name="image" component="span" /> */}



         <input onChange={fileSelected} type="file" accept="image/*"  id="image" required/>
        






        <button type="submit">Submit</button>
        </form>
   




  {/*     {images.map( images => (
        <div key={images}>
          <img src={images}></img>
        </div>
      ))} */}
   
    

    </div>


    </div>


















  );
}

export default CreatePost;
