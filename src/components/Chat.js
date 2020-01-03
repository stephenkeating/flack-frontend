import React, { Component } from "react";
import Vader from '../darth-vader.jpg'
import Luke from '../luke-skywalker.jpg'


class Chat extends Component {
  
  handleClick = (e) => {

    fetch(`http://localhost:3000/chats/${this.props.chat.id}`, {
      method:'DELETE',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then(r => r.json())
      .then(deletedChat => this.props.removeChat(deletedChat.data.id))
      .catch(err => console.log(err))

  }

  render() {
    // console.log(this.props)
    return (
      <div className='chat'>
        <div className='chatavi'>
          {this.props.chat.user.name === 'Darth Vader'? <img className='avi-chat' src={Vader} alt='Vader'></img>: <img className='avi-chat' src={Luke} alt='Luke'></img>}
        </div>
        <div className='chatbox-header'>
          {`${this.props.name}: `}
          {this.props.chat.user.id === this.props.user.id 
            ? <div className='delete-button-div'> <button className='delete-button' onClick={(e) => this.handleClick(e)}>❌</button> </div>
            : null
          }
        <div className='chatbox-body'>
          {this.props.message} 
          
        </div>
        </div>
      </div>
    )
  }
}

export default Chat;


// handleSubmit = (e) => {
//   e.preventDefault();
  
//   fetch(`http://localhost:3000/chats`, {
//     method:'POST',
//     headers: { 
//       'content-type': 'application/json',
//       'accept': 'application/json'
//     },
//     body: JSON.stringify({
//       message: this.state.newChat,
//       user_id: this.state.user.id,
//       channel_id: this.state.channel.id
//     })
//   })
//     .then(r => r.json())
//     .then(json_resp => {
//       this.setState({newChat: ''}); 
//       this.props.addNewChatToChannelChats(json_resp)
//     })
//     .catch(err => console.log(err))
  
// }