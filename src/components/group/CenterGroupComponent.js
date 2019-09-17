import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import RollingSiteComponent from './gacha/RollingSiteComponent';
import ChatboxComponent from './chat/ChatboxComponent';

class CenterGroupComponent extends React.Component {
    renderCenterPanel = () => {
        if(this.props.centerPanel == 'roll'){
          return(
            <RollingSiteComponent rollingDeck={this.props.rollingDeck}/>
            )
          } else {
            return(
            <ChatboxComponent groupData={this.props.groupData} currentRoomIndex={this.props.currentRoomIndex} handleMessageSubmission={this.props.handleMessageSubmission} currentUser={this.props.currentUser} messages={this.props.messages} resetMessages={this.props.resetMessages}/>
              )
        }
      }
    render() {
        return (
            <div className='w-100'>   
            <Row className='flex-row justify-content-center border-bottom w-100'>
            <h2>{this.props.groupData.name}</h2>
            </Row>
                {this.renderCenterPanel()}
            </div>
        )
    }
}

export default CenterGroupComponent;