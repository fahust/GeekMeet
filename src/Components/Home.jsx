import React from 'react';
import {
    Link
  } from "react-router-dom";
import Login from './Auth/Login';


export default class HomePage extends React.Component{

  constructor(props){
    super(props);
  }

render(){
return <div>
  <Login login={this.props.login} />
</div>
}

}