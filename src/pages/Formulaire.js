
import React, {   } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';





class FlavorForm extends React.Component {
    myFunction() { 
        this.props.history.push("/anim"); 
      } 
    
    constructor(props) {
      super(props);
      this.state = {value: '.......? '};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
   
    handleChange(event) {    this.setState({value: event.target.value});  }
    
    handleSubmit(event) {
     /*  alert('Votre question est bien : ' + this.state.value); */
      localStorage.setItem('Maquestion',
      JSON.stringify(this.state.value));
     /*  props.history.push('/anim'); */
   /*    window.location.href='/anim';    */
   window.location.replace("/anim");
   
    /* action="/"; */
    /* 
    FirstPage(); */
  
      event.preventDefault();
    }
    
    render() {
        
      return (
       
   
       
        <form onSubmit={this.handleSubmit} ><div className="formulaire">
        <div>
            <input value={this.state.value} onChange={this.handleChange}>           
             
            </input>
            </div>
          {console.log("this.handleSubmit")}
          {console.log(this.state)}
          <input value="OK" type="submit" onclick="/anim" />
          </div> </form>
      );
    }
  }
  export default FlavorForm;