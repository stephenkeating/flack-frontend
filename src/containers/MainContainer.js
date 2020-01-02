import React, { Component } from 'react';
import User from '../containers/User.js';
import Channels from '../containers/Channels.js';
import ChatWindow from '../containers/ChatWindow.js';


class MainContainer extends Component  {

  state = {
    users: [],
    user: {},
    userChannels: [],
    channel: {},
    channelChats: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users`)
      .then(r => r.json())
      .then(users => this.setState({users: users}))
      .catch(err => console.log(err))
  }

  renderUsers = () => {
    return this.state.users.map(user => <User user={user} key={user.id} selectUser={this.selectUser}/>)
  }

  selectUser = (selectedUser) => {
    this.setState({user: selectedUser, userChannels: selectedUser.channel_users.map(channel_user => channel_user.channel)})
  }
  
  renderChannels = () => {
    return this.state.userChannels.map(channel => <Channels channel={channel} key={channel.id} selectChannel={this.selectChannel}/>)
  }

  selectChannel = (selectedChannel) => {
    this.setState({channel: selectedChannel, channelChats: selectedChannel.chats})
  }

  addNewChatToChannelChats = (newChat) => {
    const newlyCreatedChat = {...newChat}
    this.setState({channelChats: [...this.state.channelChats, newlyCreatedChat]})
  }

  removeChat = (chatToRemove) => {
    // console.log(chatToRemove)
    this.setState({channelChats: this.state.channelChats.filter(chat => chat.id !== chatToRemove)})
  }

  render (){
    // console.log(this.state)

    return(

      <div className="app-container">
        <div className='left-nav'> 
          <h1>Flack</h1>
          { this.state.user.name
            ? <>
              <h3>Current User:</h3>
              {this.state.user.name}
              </>
            : <>
                <h3>Choose User:</h3>
                {this.renderUsers()}
              </> 
          }
          
          { this.state.user.name
            ? <>
              <h3>Channels:</h3>
              </>
            : null
          }
          { this.state.user !== {} ? this.renderChannels() : null}
        </div>

        { this.state.channel.name
            ? <div className='chat-window'>
              <ChatWindow 
                channel={this.state.channel} 
                chats={this.state.channelChats} 
                user={this.state.user}
                addNewChatToChannelChats={this.addNewChatToChannelChats}
                removeChat={this.removeChat}
                key={this.state.channel.id}
              />
              </div>
            : null
          }

        
      </div>

    )
  }
}

export default MainContainer;
