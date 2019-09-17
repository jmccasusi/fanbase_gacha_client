import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class LeftControlPanelComponent extends React.Component {
    render() {
        return (
            <Col className='d-none d-md-block flex-column align-items-center border border-dark p-3 scrollVertical defaultHeight'>
              <Row className='flex-row justify-content-center  border-bottom w-100 my-2 py-2'>
                  <h5>{this.props.currentUser.username}</h5>
              </Row>
              <Row className='flex-row justify-content-center  border-bottom my-2 w-100 py-2'>
                <div className="flex-column align-items-center">
                  <h5>Chat Rooms</h5>
                  {
                      this.props.groupData.rooms.map(room => {
                          return (
                              <li onClick={() => {
                                this.props.changeRoom(room.id);
                                this.props.changeCenterPanel('chatbox');
                                this.props.resetMessages(this.props.groupData.rooms[`${this.props.currentRoomIndex}`].messages);
                              }}>{room.name}</li>
                          )
                      })
                  }
                </div>
              </Row>
              <Row className='flex-row justify-content-center  border-bottom w-100 my-2 py-2'>
                <div className="flex-column align-items-center">
                  <h5>Gacha Game</h5>
                  <li onClick={()=> {
                    this.props.changeCenterPanel('roll')
                  }}>Rolling Site</li>
                  <li>Voting Likes</li>
                  <li>Trading Hall</li>
                </div>
              </Row>
            </Col>
        )
    }

}

export default LeftControlPanelComponent;