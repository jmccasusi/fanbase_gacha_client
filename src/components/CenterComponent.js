import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import ChatboxComponent from './group/ChatboxComponent';
import LoginComponent from './user/LoginComponent';

class CenterComponent extends React.Component {
    renderCenterPanel = () => {
      if(this.props.centerPanel == 'chatbox'){
        return(
          <ChatboxComponent groupData={this.props.groupData} currentRoomIndex={this.props.currentRoomIndex} handleMessageSubmission={this.props.handleMessageSubmission}/>
        )
      } else if(this.props.centerPanel == 'login') {
        return(
          <LoginComponent changeCenterPanel={this.props.changeCenterPanel} loginUser={this.props.loginUser}/>
        )
      }
    }

    render() {
        return (
            <Col className='d-flex flex-column col-md-6 align-items-center border border-dark px-4 py-2 w-100 defaultHeight'>    
                {this.renderCenterPanel()}
            </Col>
        )
    }

}

export default CenterComponent;