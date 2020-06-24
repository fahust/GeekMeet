import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import HomePage from './Components/Home';
import ForumPage from './Components/Forum/Forum';
import AddPostPage from './Components/Forum/AddPost';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user:''
    }
    this.changeSessionUser = this.changeSessionUser.bind(this);
  }

  changeSessionUser(data) {
    this.setState({user:data.user})
    console.log(data)
  }


  render (){
    return <Router>
      <div>
        
          <Switch> 
            <Route path="/Forum">
              <Header place = "forum"/>
                <ForumPage user={this.state.user} />
            </Route>
            <Route path="/AddPost">
              <Header place = "forum"/>
                <AddPostPage />
            </Route>
            <Route path="/">
              <Header place = "login"/>
              <HomePage user={this.state.user} login={this.changeSessionUser} />
            </Route>
            <Route path="/users">
              <Header place = "login"/>
            </Route>
          </Switch>
      </div>
    </Router>
  };
}
