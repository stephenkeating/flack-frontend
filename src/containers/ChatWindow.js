import React, { Component } from "react";
import Chat from '../components/Chat.js';
import NewChat from '../components/NewChat.js';


class ChatWindow extends Component {

  state = {
    channel: this.props.channel,
    channelChats: []
  }

  componentDidMount() {
    this.fetchChats()
    this.timer = setInterval(() => this.fetchChats(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
}

  fetchChats = () => {
    fetch(`http://localhost:3000/channels/${this.state.channel.id}`)
    .then(r => r.json())
    .then(channel => this.setState({channelChats: channel.chats.sort((a, b) => a.updated_at - b.updated_at)}))
    .catch(err => console.log(err))
  }

  renderChat = () => {
    return this.state.channelChats.map(chat => 
    <Chat 
      chat={chat} 
      message={chat.message} 
      name={chat.user.name} 
      user={this.props.user} 
      removeChat={this.removeChat} 
      key={chat.id}
    />)
  }
  
  addNewChatToChannelChats = (newChat) => {
    const newlyCreatedChat = {...newChat}
    this.setState({channelChats: [...this.state.channelChats, newlyCreatedChat]})
  }

  removeChat = (chatToRemove) => {
    // console.log(chatToRemove)
    this.setState({channelChats: this.state.channelChats.filter(chat => chat.id !== chatToRemove)})
  }

  render() {
    // console.log(this.props)
    return (
      <div >
        <div className='chat-window-header'>
          {/* <h3>  */}
            {`${this.state.channel.name}: `}{this.props.channel.description}
          {/* </h3> */}
            
        </div>
        {this.renderChat()}
        {<NewChat 
            user={this.props.user} 
            addNewChatToChannelChats={this.addNewChatToChannelChats} 
            channel={this.state.channel} 
          /> 
        }
      </div>
    )
  }
}

export default ChatWindow;