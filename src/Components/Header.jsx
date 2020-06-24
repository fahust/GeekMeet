import React from 'react';
import {
    Link
  } from "react-router-dom";


export default class Header extends React.Component{

  headerTitle(){
    if( this.props.place == 'login'){
      return <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/Forum">Forum</Link>
      </li>
    </ul>
    }else{
      return <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/AddPost">Add post</Link>
      </li>
    </ul>
    }
  }

render(){
  const header = this.headerTitle();
return <nav>
  {header}
</nav>
}

}