import React from "react";
import '../../conf/api.axios';
import * as axios from 'axios';
import { NavLink } from "react-router-dom";

export default class ListItems extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items: [{"id":"45", "title": "histoire", "description": "raconte nous là"}],
          readError: null
      }
    }

    componentDidMount(){
        axios.get(`/Items`)
             .then(res => {
                    const items = res.data;
                    this.setState({ items });
            })
    }

    render(){
        return(
            <div className = "container">
                <h2> Items: </h2>
                <NavLink to = "/addItem">
                    <button className="btn btn-primary" type="submit">ajouter</button>
                </NavLink>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>      
                        {
                            this.state.items.map(item => {
                                return(
                                    <tr className = "table-success" key = {item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}