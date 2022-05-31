
import React, {   } from "react";

import { NavLink } from 'react-router-dom';

class FlavorForm extends React.Component {

    
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
        window.location.href = '/anim';  
    /*    event.target.submit('/anim'); */
 /*  <NavLink to="/anim"/> */


      event.preventDefault();
    }
    
    render() {
        
      return (
       
   
       
        <form onSubmit={this.handleSubmit}><div className="formulaire">
        <div>
            <input value={this.state.value} onChange={this.handleChange}>           
             
            </input>
            </div>
          {console.log("this.handleSubmit")}
          {console.log(this.state)}
          <button value="OK" type="submit"> OK </button>
          </div> </form>
      );
    }
  }
  export default FlavorForm;