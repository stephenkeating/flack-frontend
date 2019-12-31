import React, { Component } from "react";
import Chat from '../components/Chat.js';
import NewChat from '../components/NewChat.js';


class ChatWindow extends Component {

  // state = {
  //   chats: this.props.chats
  // }

  renderChat = () => {
    return this.props.chats.map(chat => <Chat message={chat.message} name={chat.user.name} key={chat.id}/>)
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
        {this.props.chats.length > 0 ? <NewChat user={this.props.user} addNewChatToChannelChats={this.props.addNewChatToChannelChats} channel={this.props.channel} /> : `Please choose a user and channel.`}
      </div>
    )
  }
}

export default ChatWindow;
