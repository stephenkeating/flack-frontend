import React, { Component } from "react";


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
        {`${this.props.name}: `}
        {this.props.message} 
        {this.props.chat.user.id === this.props.user.id 
          ? <button onClick={(e) => this.handleClick(e)}>Delete</button> 
          : null
        }
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