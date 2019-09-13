import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import RoomComponent from './RoomComponent';

class ChatboxComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          activeRoom: 0
      }
    }
    render() {
        return (
            <div className='w-100'>
            <Row className='flex-row justify-content-center border-bottom w-100'>
                <h2>Group Name</h2>
              </Row>
              <Row className='flex-row justify-content-center border-bottom w-100'>
                <h5>Chat Room 1</h5>
              </Row>
                <RoomComponent messages={this.props.groupData.rooms[`${this.state.activeRoom}`].messages}/>
                <Row className="flex-row w-100">
              <Col xs={12} className="p-0">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="input-group-text">+</button>
                </div>
                  <input type="text" class="form-control"/>
                <div class="input-group-append">
                  <button class="input-group-text">Send</button>
                </div>
              </div>
              </Col>
            </Row>
            </div>
        )
    }

}

export default ChatboxComponent;