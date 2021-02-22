import React, { Component } from 'react';

class NotFound extends Component {
  constructor (props) {
    super(props) 
    console.log(props ,'props')
    console.log("property_id",props.location.state)
  }
  componentDidMount(props){
    console.log();
  }
  render() {
      return (
          <div> Login </div>
      );
  }
}

export default NotFound