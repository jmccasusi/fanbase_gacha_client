import React from 'react'
import { Container, Row, Col, Alert, Form } from 'react-bootstrap'
import RoomComponent from './RoomComponent';

class ChatboxComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          messageContent: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <div className='w-100'>
            <Row className='flex-row justify-content-center border-bottom w-100'>
                <h2>{this.props.groupData.name}</h2>
              </Row>
              <Row className='flex-row justify-content-center border-bottom w-100'>
                <h5>{this.props.groupData.rooms[`${this.props.currentRoomIndex}`].name}</h5>
              </Row>
                <RoomComponent messages={this.props.groupData.rooms[`${this.props.currentRoomIndex}`].messages}/>
                <Row className="flex-row w-100">
              <Col xs={12} className="p-0">
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
            </div>
        )
    }

}

export default ChatboxComponent;