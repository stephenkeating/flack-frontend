import React, { Component } from "react";


class Channels extends Component {


  

  render() {
    return (
      // <div className='left-nav'>
      // temp channel test
      // </div>
      <div className='left-nav-channels' onClick={() => this.props.selectChannel(this.props.channel)}>
        {this.props.channel.name} 
      </div>
    );
  }
}

export default Channels;
