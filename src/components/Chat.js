import React, { Component } from "react";


class Chat extends Component {
  

  render() {
    // console.log(this.props)
    return (
      <div className='chat'>
        {this.props.name}: {this.props.message}
      </div>
    )
  }
}

export default Chat;
