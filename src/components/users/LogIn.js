import React from "react";
import { Switch, Link, Redirect } from "react-router-dom";
import '../../conf/api.axios';
import * as axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        authentificated: false,
        users: [],
        error: null,
        email: "",
        password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  componentDidMount(){
    axios.get('/Users')
             .then(res => {
                const users = res.data;
                this.setState({ users });
            })
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    
    this.state.users.forEach(user => {
      if(!user.email.localeCompare(this.state.email) && user.password.localeCompare(this.state.password)){
        this.setState({authentificated: true})
      }else{
        this.setState({authentificated: false})
        this.setState({ error: "veuillez verifier vos identifiants" });
      }
    })
  }

  render() {
    return (
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
              <div className="col col-sm-5 col-md-5 col-lg-4 col-xl-3 mt-5">
                  <form
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                  >
                  <h2>
                      Login :
                  </h2>
                  <div className="form-group">
                      <label>Email address:</label>
                      <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        className="form-control"
                      />
                  </div>
                  <div className="form-group">
                      <label>Password:</label>
                      <input
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInputChange}
                      value={this.state.password}
                      type="password"
                      className="form-control"
                      />
                  </div>
                  <div>
                      {this.state.error ? (<p>{this.state.error}</p>) : null }
                      <button className="btn btn-primary" type="submit">Login</button>
                  </div>

                  {this.state.authentificated ? 
                      (<Switch> <Redirect to = '/listItem'/> </Switch>) : null
                  }
                  <hr />
                  <p>
                      Don't have an account? <Link to="/signup">Sign up</Link>
                  </p>
                  </form>
              </div>
          </div>
        </div>
    );
  }
}