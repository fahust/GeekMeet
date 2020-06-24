import React from 'react';
import axios from 'axios';

export default class GetPost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post : {},

        }
        axios.get(
            "http://localhost:3001/getPost/",
            {
                post: this.props.post
            },
          ).then(response => {
            if (response.data.status === "created"){
                this.setState({post : response.data.post});
                console.log('post load ok')//this.props.handleSuccess
            }
          }).catch(error => {
            console.log("post load error", error);
          });
    }



    render(){

        return
        <view>
            <ul>
                {this.state.post}
            </ul>
        </view>
    }
} 