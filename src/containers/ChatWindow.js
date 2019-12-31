import React, { Component } from "react";
import Chat from '../components/Chat.js';
import NewChat from '../components/NewChat.js';


class ChatWindow extends Component {

  state = {
    chats: this.props.chats
  }

  renderChat = () => {
    return this.state.chats.map(chat => <Chat message={chat.message} name={chat.user.name} key={chat.id}/>)
  }
  

  render() {
    // console.log(this.props)
    return (
      <div >
        <div>

        <h3> {this.props.channel.name} </h3>
        {/* {this.props.channel.description} */}

        </div>
        {this.renderChat()}
        <NewChat />
      </div>
    )
  }
}

export default ChatWindow;
