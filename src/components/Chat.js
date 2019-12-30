import React, { Component } from "react";


class Chat extends Component {

  // renderChats = () => {
  //   return this.props.books.map(book => <Book book={book} onClick={this.props.addBookToShelf} key={book.id}/>)
  // }
  

  render() {
    console.log(this.props)
    return (
      <div className='chat'>
        {this.props.name}: {this.props.message}
      </div>
    )
  }
}

export default Chat;
