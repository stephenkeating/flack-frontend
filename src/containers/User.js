import React, { Component } from "react";
import Vader from '../darth-vader.jpg'
import Luke from '../luke-skywalker.jpg'



class User extends Component {
  
  
  
  render() {
    console.log(this.props)
    return (

      <div onClick={() => this.props.selectUser(this.props.user)}>
        {this.props.user.name} <br></br>{this.props.user.name === 'Darth Vader'? <img className='avi' src={Vader} alt='Vader'></img>: <img className='avi' src={Luke} alt='Luke'></img>}
      </div>

    );
  };

}

export default User;