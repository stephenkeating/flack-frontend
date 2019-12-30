import React, { Component } from "react";
import Chat from '../components/Chat.js';


class ChatWindow extends Component {

  state = {
    chats: this.props.chats
  }

  renderChat = () => {
    return this.state.chats.map(chat => <Chat message={chat.message} name={chat.user.name} key={chat.id}/>)
  }
  

  render() {
    console.log(this.props)
    return (
      <div >
        {this.renderChat()}
        
      </div>
    )
  }
}

export default ChatWindow;
