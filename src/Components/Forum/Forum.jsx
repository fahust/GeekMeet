import React from 'react';
import axios from 'axios';

export default class Forum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listPost : [],

        }
        axios.get(
            "http://localhost:3001/forum/",
            {
                typeForum: this.props.typeForum
            },
          ).then(response => {
            if (response.data.status === "created"){
                this.setState({listPost : response.data.listPost});
                console.log('forum load ok')//this.props.handleSuccess
            }
          }).catch(error => {
            console.log("forum load error", error);
          });
          //console.log(this.props.user)
    }



    render(){

        const listPost = this.state.listPost.map((post) => {
            return <li>{post.title}</li>
        });

        return <div>
            <h1>Forum</h1>
            <ul>
                {listPost}
            </ul>
        </div>
    }
} 