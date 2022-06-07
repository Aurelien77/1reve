


import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreatePost() {
  let history = useHistory();


  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Vous devez entrer un titre"),
    postText: Yup.string()
      .min(8)
      .max(60000)
      .required("Vous devez entrer du texte"),
    lien: Yup.string()
      .notRequired("Vous pouvez poster sans insérer de lien")
      .matches(
        /((https?):\/\/)?()/,   /*  /((https?):\/\/)?(www.)/, */
        "Entrer une URL correcte sous cette forme : https://www. !"
      ),
  });
  const initialValues = {
    title: "",
    postText: "",
   /*  image:"", */
  
  };
  const onSubmit = (data) => {
    
    const fileInput = document.querySelector('#your-file-input') ;
    const filetitle = document.querySelector('#title') ; 
    const filetexte = document.querySelector('#postText') ;



    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
    formData.append('title', filetitle.value);
    formData.append('postText', filetexte.value);


    console.log("console log de l'input titre ");
  

    console.log("console log de l'input postText ");
    console.log(filetexte.value);

    console.log("console log du fichier ");
    console.log(fileInput.files[0]);

    
  
    console.log("console log de formData ");
    console.log(formData.append);

  

    axios
      .post("https://reves7.herokuapp.com/postspriv", formData,   {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
   
      .then(() => {
        history.push("/Home");
      });
  };
  //posts BIO +
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <div className="POSTPRIVE">Créer un post <span>PRIVE</span></div>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="title"
            name="title"
            placeholder="(Ex. Title...)"
            type="text"
           
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            cols="45"
            rows="4"
            component="textarea"
            autocomplete="off"
            id="postText"
            name="postText"
            placeholder="(Ex. Post...)"
            type="text"
          
          />{" "}
          <label>Noter ici votre lien: </label>
          <ErrorMessage name="lien" component="span" />

          
          <Field
          
            autocomplete="off"
            id="your-file-input"
            name="image"
            Content-Type="multipart/form-data"
            placeholder="(Ex. htpp://monlien.com...)"
            type="file"
          />
          <button type="submit"> Créer un Post</button>
        </Form>
        
      </Formik>
    
      
    </div>
  );
}

export default CreatePost;
