import React, { Component } from 'react';
import User from '../containers/User.js';
import Channels from '../containers/Channels.js';
import ChatWindow from '../containers/ChatWindow.js';
import Vader from '../darth-vader.jpg'
import Luke from '../luke-skywalker.jpg'


class MainContainer extends Component  {

  state = {
    users: [],
    user: {},
    userChannels: [],
    channel: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users`)
    .then(r => r.json())
    .then(usersToLoad => this.setState({users: usersToLoad}))
    .catch(err => console.log(err))
  }

  // fetchUsers = () => {
  //   fetch(`http://localhost:3000/users`)
  //   .then(r => r.json())
  //   .then(users => this.setState({users: users}))
  //   .catch(err => console.log(err))
  // }
  
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
    this.setState({channel: selectedChannel})
  }

  render (){
    // console.log(this.state)
    return(

      <div className="app-container">
        <div className='left-nav'> 
          <h1>Flack</h1>
          { this.state.user.name
            ? <div className='left-nav-user-box'>
              {/* <h3>Current User:</h3> */}
              {this.state.user.name} <br></br>
              {this.state.user.name === 'Darth Vader'? <img className='user' src={Vader} alt='Vader'></img>: <img className='user' src={Luke} alt='Luke'></img>}
              </div>
            : <div className='left-nav-user-box'>
                <h3>Choose User:</h3>
                {this.renderUsers()}
              </div> 
          }
          
          { this.state.user.name
            ? <div className='left-nav-channel-box'>
              <div className='channel-header'>Channels:</div>
              </div>
            : null
          }
          { this.state.user !== {} 
            ? <div className='left-nav-channel-box'>
                {this.renderChannels() }
              </div>
            : null
          }
        </div>

        { this.state.channel.name
            ? <div className='chat-window'>
              <ChatWindow 
                channel={this.state.channel} 
                user={this.state.user}
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
