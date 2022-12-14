import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "" , password:"", city:""};
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]:value})
    // this.setState({
    //   userName: event.target.value
    // });
  };

  onSubmitHandler = (event)=>{
    event.preventDefault();
    alert(this.state.userName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name="userName" onChange={this.onChangeHandler} type="text"></input>
          <div>User Name is {this.state.userName}</div>

          <h3>Password</h3>
          <input name="password" onChange={this.onChangeHandler} type="password"></input>
          <div>Password is {this.state.password}</div>
          
          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler} type="text"></input>
          <div>City is {this.state.city}</div>
          
        </form>
      </div>
    );
  }
}
