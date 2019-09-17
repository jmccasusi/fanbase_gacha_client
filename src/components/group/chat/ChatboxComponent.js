import React from 'react'
import axios from 'axios';
import { Container, Row, Col, Alert, Form } from 'react-bootstrap'
import RoomComponent from './RoomComponent';

class ChatboxComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          messageContent: '',
          messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getMessages = this.getMessages.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            messageContent: ''
        })
        this.props.handleMessageSubmission(this.state.messageContent);
    }

    getMessages(){
        this.setState({
            messages: this.props.currentMessages
        })
    }

    componentDidMount() {
        console.log(this.props.currentRoomData.messages)
        this.getMessages();
        const socket = new WebSocket('ws://fanbase-gacha-api.herokuapp.com/cable');

        socket.onopen = function(e) {
            console.log("Connection established")
            socket.send(subscribeString)
        }
        socket.onclose = function(e) {
            console.log("Error occurred.");
            // clients.Remove(socket)  
        }
        socket.onmessage = function(e){
            var server_message = e;
            var data = JSON.parse(server_message.data).message;
            console.log(JSON.parse(data));
            if(typeof JSON.parse(data) === 'object' && this.state.messages){
                this.props.updateMessages(JSON.parse(data));
            }
        }.bind(this)

        const subscribeString = JSON.stringify(
        {
            "command": "subscribe",
            "identifier": JSON.stringify(
                {"channel": "MessageChannel" }
                 )
        }  
    )
    }
    

    render() {
        return (
            <Col className="d-flex flex-column col-md-6 align-items-center border border-dark px-4 py-2 w-100 defaultHeight">
            <Row className='flex-row justify-content-center border-bottom w-100'>
                <h5>{this.props.currentRoomData.name}</h5>
            </Row>
            <RoomComponent currentMessages={this.props.currentMessages} currentUser={this.props.currentUser}/>
           
            <Row className="flex-row w-100">
              <Col xs={12} className="p-0 ml-3">
              <Form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <button type="button" class="input-group-text">+</button>
                    </div>
                    <input type="text" class="form-control" value={this.state.messageContent} name="messageContent" onChange={this.handleChange}/>
                    <div class="input-group-append">
                    <button type="submit" class="input-group-text">Send</button>
                    </div>
                </div>
              </Form>
              </Col>
            </Row>
            </Col>
        )
    }

}

export default ChatboxComponent;