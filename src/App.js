import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {Header, Login, SingUp, ListItems, AddItem} from "./components";

class App extends Component {
  state = {
    data: null
  };

  /*componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };*/

  render() {  
    return (
      <div className="App d-flex flex-column">
        <Header />
        
        <Switch>
          
          <Route path = '/signup'> <SingUp /> </Route>
          <Route path = "/addItem" > <AddItem /> </Route> 
          <Route path = "/listItem" > <ListItems /> </Route>
          <Route path = '/'> <Login /> </Route>
                  
        </Switch>
      </div>
    );
  }
}

export default App;