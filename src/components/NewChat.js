import React, { Component } from "react";


class NewChat extends Component {
  
  state = {
    newChat: '',
    user: this.props.user,
    channel: this.props.channel
  }

  handleChange = (value) => {
    // console.log(value)
    this.setState({newChat: value});
  }

  // handleSubmit = (e) => {
  //   alert('A name was submitted: ' + this.state.newChat);
  //   e.preventDefault();
  //   this.setState({newChat: ''});
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:3000/chats`, {
      method:'POST',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        message: this.state.newChat,
        user_id: this.state.user.id,
        channel_id: this.state.channel.id
      })
    })
      .then(r => r.json())
      .then(json_resp => {
        this.setState({newChat: ''}); 
        this.props.addNewChatToChannelChats(json_resp)
      })
      .catch(err => console.log(err))
    
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          <input type="text" placeholder='Message' value={this.state.newChat} onChange={(e) => this.handleChange(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewChat;
