
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      value: 'Écrivez un essai à propos de votre élément du DOM préféré'    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  /*   handleChange(event) {    this.setState({value: event.target.value});  } */
    handleChange(event) {    this.setState({value: event.target.value});  }

    handleSubmit(event) {
      alert('Un essai a été envoyé : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return ( 
        <form onSubmit={this.handleSubmit}>   {console.log(this.state.value)}
          <label>
           
            <textarea value={this.state.value} onChange={this.handleChange} />  {/* {this.handleChange}   */}  {this.state.value}   </label>
          <input type="submit" value="Envoyer" />
       
        </form>   
      );     
    } 
  }
  export default EssayForm;
 
/* 
  import { Link } from "react-router-dom";

  function EssayForm () {
    
  
 

        let history = useHistory();
      return (
          
        <span >   <textarea rows="1" cols="80" name="question" id="question" className="question">  </textarea>
        
        
        
        
         <button onClick={() => {
            history.push(`/anim`);
          } }>OK</button> 

<Link to={`/anim`}>
                <span >
              </span> 
                </Link>




          
     
          
          
          
          
           </span>
        
      );
    
  }
  export default EssayForm; */