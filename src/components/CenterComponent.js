import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import LoginComponent from './stranger/LoginComponent';
import SignUpComponent from './stranger/SignUpComponent';
import CenterGroupComponent from './group/CenterGroupComponent';

class CenterComponent extends React.Component {
    renderCenterPanel = () => {
      if(this.props.currentUser !== null){
        return(
          <CenterGroupComponent rollingDeck={this.props.rollingDeck} groupData={this.props.groupData} currentRoomIndex={this.props.currentRoomIndex} handleMessageSubmission={this.props.handleMessageSubmission} currentUser={this.props.currentUser} centerPanel={this.props.centerPanel} messages={this.props.messages} resetMessages={this.props.resetMessages}/>
        )
      } else if(this.props.centerPanel == 'login') {
        return(
          <LoginComponent changeCenterPanel={this.props.changeCenterPanel} loginUser={this.props.loginUser} currentUser={this.props.currentUser}/>
        )
      } else if(this.props.centerPanel == 'signup') {
        return(
          <SignUpComponent changeCenterPanel={this.props.changeCenterPanel} currentUser={this.props.currentUser}/>
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