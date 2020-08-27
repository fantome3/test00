import React from 'react';
import '../../conf/api.axios';
import * as axios from 'axios';

export default class TweetForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            description : null,
            title: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            title: this.state.title,
            description: this.state.description 
        }
        
        axios.post('/Items', item)
             .then(response => console.log(response.data));

        window.location = '/listItem';
    }

    render(){
        return(
            <div className = "d-flex flex-row content mx-auto">
                
                <div className = "flex-fill">
                    <form onSubmit = { this.handleSubmit }>

                        <h1>Nouveau Item</h1>

                        <div className="form-group">
                            <input
                                placeholder="titre"
                                onChange={this.handleChange}
                                value={this.state.email}
                                className="form-control"
                                required
                            />
                        </div>
                        
                            <div className = "form-group">
                                <textarea 
                                    className = "form-control" 
                                    name = "content"
                                    onChange = { this.handleChange } 
                                    placeholder = "write there!!!"
                                />
                            </div>
                    
                        <div>
                         <button className="btn btn-primary ml-auto d-block" type="submit">Sauvegarder</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}