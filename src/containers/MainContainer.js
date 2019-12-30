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

  render (){
    console.log(this.state)

    return(

      <div className="app-container">
        <div className='left-nav'> 
          {this.renderUsers()}
          {this.renderChannels()}
        </div>
        <div className='chat-window'>
          <ChatWindow chats={this.state.channelChats} key={this.state.channel.id}/>
        </div>
      </div>

    )
  }
}

export default MainContainer;
