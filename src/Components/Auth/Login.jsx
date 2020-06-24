import React from 'react';
import axios from 'axios';


export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      loginErrors: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const {email, password, password_confirmation } = this.state;
    this.props.login({user:email});
    axios.post(
      "http://localhost:3001/registrations",
      {
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        }
      },
      {withCredantials: true}
    ).then(response => {
      if (response.data.status === "created"){
        console.log('ok')//this.props.handleSuccess
      }
    }).catch(error => {
      console.log("registration error", error);
    });
  }

render(){
return <div>
  <h1>Login</h1>
  <form onSubmit={this.handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={this.state.email}
      onChange={this.handleChange}
      required />
      
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={this.state.password}
      onChange={this.handleChange}
      required />

    <input
      type="password"
      name="password_confirmation"
      placeholder="Password confirmation"
      value={this.state.password_confirmation}
      onChange={this.handleChange}
      required />

      <button type="submit">Register</button>
  </form>
</div>
}

}