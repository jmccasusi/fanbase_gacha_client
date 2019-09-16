import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class LoginComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          isAdmin: false,
          errLogin: false,
          errMessage: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      
      axios.post(`http://localhost:3000/user_token`, {
          auth: {
            email: this.state.email,
              password: this.state.password
          }
      }).then((res) => {
        this.setState({
            email: '',
            password: '',
            isAdmin: false
        })
        this.props.changeCenterPanel('chatbox');
        sessionStorage.setItem("jwt", res.data.jwt);
        this.props.loginUser(res.data.jwt);
        }
      ).catch(function (error) {
        if (error.response) {
          console.log('ERROR!')
        }
      });

    //   if(!response.data.error)
    //   {
    //     this.props.loginUser(response.data.currentUser);
    //     this.setState({
    //         toUserPage: true
    //     })
    //     sessionStorage.setItem('currentUser', JSON.stringify(response.data.currentUser));
    //   } else {
    //     console.log('error')
    //     this.setState({
    //         errLogin: true,
    //         errMessage: response.data.error
    //     })
    //   }
  }

  handleChange(event) {
      this.setState({
          [event.currentTarget.name]: event.currentTarget.value
      });
  }


  renderRedirect = () => {
      if (this.state.toUserPage || this.props.currentUser !== null) {
          return <Redirect to='/babies/duel' />
      }
  }

  hasError = () => {
    if (this.state.errLogin) {
        return (
            <div class="container alert alert-danger" role="alert">
            {this.state.errMessage}
            </div>
        )
    }
}

componentDidMount() {
  if(this.props.currentUser != null) {
    this.props.changeCenterPanel('chatbox');
  }
}

  render() {
    return (
      <div className="defaultHeight w-100">
        {this.hasError()}
            <div className="jumbotron">
                <h3> Log in </h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                          Email
                  </Form.Label>
                      <Col sm={10}>
                          <Form.Control type="email" id="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} required />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                          Password
                  </Form.Label>
                      <Col sm={10}>
                          <Form.Control type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit"> Enter </Button>
                    </Col>
                </Form.Group>
              </Form>
              <hr/>
              <div className="d-flex justify-content-center">
                <h6>Don't have an account? Create one!</h6>
              </div>
            </div> 
        </div>    
    )
  }
}
export default LoginComponent;