import React, { Component } from 'react'

class LogedInUser extends Component {

	constructor(props) {
		super(props)
		this.state = {
      userid: "5b2696c372348216d09e29a3"
		}
    this.getUserId = this.getUserId.bind(this);

	}
  getUserId() {
    console.log("getUserId")
    return this.state.userid
  }


	render() {
		return (
		 <div />
  	)
	}
}

export default LogedInUser.getUserId
