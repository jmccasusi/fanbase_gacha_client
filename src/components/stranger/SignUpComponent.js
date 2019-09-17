import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class SignUpComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username : '',
            password : '',
            toLoginPage: false
        }
        this.handleUserCreation = this.handleUserCreation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleUserCreation(event) {
        event.preventDefault()
        const response = await axios.post(`${this.props.baseURL}/users`, {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        });
        this.setState({
            email : '',
            username : '',
            password : '',
            toLoginPage: true
        });
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    renderRedirect = () => {
        if (this.state.toLoginPage) {
            this.props.changePageConfig('login');
        }
    }

    render() {
        return (
                <div className='jumbotron w-100'>
                {this.renderRedirect()}
                        <h1> Sign Up </h1>
                        <p>Fill out the following to create an account</p>
                        <form onSubmit={this.handleUserCreation}>
                            <div className="form-group">
                                <label for='email'><b>Email Address</b></label>
                                <input type='email' className='form-control' placeholder='Email Address' name='email' value={this.state.email} onChange={this.handleChange} required></input>
                            </div>
    
                            <div className="form-group">
                                <label for='username'><b>Username</b></label>
                                <input type='username' className='form-control' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} required></input>
                            </div>
    
                            <div className="form-group">
                                <label for='email' ><b>Password</b></label>
                                <input type='password' className='form-control' placeholder='Enter Password' name='password' onChange={this.handleChange} value={this.state.password} required></input>
                            </div>
    
                            <div className="clearfix">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <a href='/'><button className='back' type="button" className="btn btn-danger"> Cancel </button></a>
                            </div>
                        </form>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <h6>Already have an account? <a href='#' onClick={() => {this.props.changePageConfig('login')}}>Sign in!</a></h6>
                        </div>
                </div> 
        )
    }
}

export default SignUpComponent;