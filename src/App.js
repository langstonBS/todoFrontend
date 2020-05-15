import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todo from './todopage'
import Login from './Login';
import SingUp from './SingUp';
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            {/* { this.state.token && <div>welcome, user!!!</div> }
            { this.state.token && <Link to="/todopage"><div>todos</div></Link> } */}
            <Link to="/Login"><div>log in</div></Link>
            <Link to="/SingUp"><div>sign up</div></Link>
            <button onClick={() =>this.handleTokenChange('')}>logout</button>
          </ul>
          <Switch>
            <Route exact path='/Login' render={(routerProps) => <Login 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps} />} 
              />
             <Route 
            exact path='/SingUp' 
              render={(routerProps) => <SingUp 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps}/>} 
              />
            <PrivateRoute 
              exact 
              path='/todopage' 
              token={this.state.token} 
              render={(routerProps) => <Todo 
              {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}