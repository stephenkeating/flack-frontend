import React, { Component } from "react";

class User extends Component {
  
  // renderUsers = () => {
  //   return this.props.users.map(user => <br>{user.name}</br>)
  // }
  
  render() {
    // console.log(this.props)
    return (

      <div className='left-nav' onClick={() => this.props.selectUser(this.props.user)}>
        {this.props.user.name}
      </div>

    );
  };

}

export default User;