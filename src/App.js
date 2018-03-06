import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { Grid } from 'semantic-ui-react'
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from './components/Customers/Customers'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

class App extends Component {

  state = {
    isAuthenticated: false
  }

  componentWillMount = () => {
    sessionStorage.getItem('isAuthenticated') &&
      this.setState({ isAuthenticated: true })
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Serasa Internal App</h1>
        </header>
        <Grid centered container columns={1}>
          <Grid.Column>
            {/* redirect if not authenticated */}
            {this.state.isAuthenticated ?
              <Redirect to="/customers" push /> :
              <Redirect to="/login" push />
            }
            <Switch>
              {/* subroutes */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/customers" component={Customers} />
            </Switch>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
