
import { Button } from "bootstrap";
import React, {   } from "react";






class FlavorForm extends React.Component {
    myFunction() { 
        this.props.history.push("/anim"); 
      } 
    
    constructor(props) {
      localStorage.removeItem('Maquestion');
      super(props);
      this.state = {value: '?'};
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this); 

      
    }
   
    handleChange(event) {    this.setState({value: event.target.value});  

    localStorage.setItem('Maquestion',
    JSON.stringify(this.state.value));}
    
    handleSubmit(event) {
   
  
      event.preventDefault();
    } 
    
    render() {
        
      return (
       
   
       
        <form  ><div className="formulaire">
        <div>
            <input value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}>           
             
            </input>
            </div>
          {console.log("this.handleSubmit")}
          {console.log(this.state)}
         
          </div> </form>
      );
    }
  }
  export default FlavorForm;