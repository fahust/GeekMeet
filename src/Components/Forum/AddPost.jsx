import React from 'react';
import axios from 'axios';
import { MyContext } from '../MyContext'

export default class AddPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            text: ""
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
        const {title, text } = this.state;
    
        axios.post(
          "http://localhost:3001/addPost",
          {
            user: {
                typeForum : this.props.typeForum,
                title: title,
                text: text
            }
          }
        ).then(response => {
          if (response.data.status === "created"){
            console.log('post ok')//this.props.handleSuccess
          }
        }).catch(error => {
          console.log("post error", error);
        });
        event.preventDefault();
        this.setState({
          title:"",
          text:""
        })
      }
    
    render(){

        return <div>
        <h1>Add post</h1>
          <form onSubmit={this.handleSubmit}>
              <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
              required />
              
              <input
              type="text"
              name="text"
              placeholder="text"
              value={this.state.text}
              onChange={this.handleChange}
              required />
          
              <button type="submit">Post</button>
          </form>
        </div>
          
    }
}