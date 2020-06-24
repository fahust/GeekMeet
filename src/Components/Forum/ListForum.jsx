import React from 'react';
import axios from 'axios';

export default class ListForum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listForum : [],

        }
        axios.get(
            "http://localhost:3001/listForum/",
            {
                action: 'all'
            },
          ).then(response => {
            if (response.data.status === "created"){
                this.setState({listForum : response.data.listForum});
                console.log('forum load ok')//this.props.handleSuccess
            }
          }).catch(error => {
            console.log("forum load error", error);
          });
    }



    render(){

        const listForum = this.state.listForum.map((forum) => {
            return <li>{forum.title}</li>
        })

        return
        <view>
            <ul>
                {listForum}
            </ul>
        </view>
    }
} 