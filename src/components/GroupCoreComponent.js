import React from 'react'
import axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import LeftControlPanelComponent from './group/LeftControlPanelComponent';
import RightMemberListComponent from './group/RightMemberListComponent';
import ChatBoxComponent from './group/chat/ChatboxComponent';
import RollingSiteComponent from './group/gacha/RollingSiteComponent';

class GroupCoreComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pageConfig: 'chat',
            groupData: {},
            loaded: false,
            currentGroupID: 0,
            currentRoomData: {},
            currentMessages: [],
            rollingDeck: []
        }
        this.renderCenterComponent = this.renderCenterComponent.bind(this);
        this.getGroupData = this.getGroupData.bind(this);
        this.changeRoomData = this.changeRoomData.bind(this);
        this.buildRollingDeck = this.buildRollingDeck.bind(this);
        this.handleMessageSubmission = this.handleMessageSubmission.bind(this);
        this.changePageConfig = this.changePageConfig.bind(this)

        this.getMessages = this.getMessages.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    componentDidMount() {
        this.getGroupData(1);
    }

    // For page navigation
    changePageConfig(component) {
        this.setState({
            pageConfig: component
        })
    }

    // For Chat
    async handleMessageSubmission(messageContent) {
        await axios.post(`${this.props.baseURL}/groups/${this.state.groupData.id}/rooms/${this.state.currentRoomData.id}/messages`, {
        content: messageContent,
        user_id: this.props.currentUser.id
        });
    }

    async getMessages(){
        const response = await axios(`${this.props.baseURL}/groups/1/rooms/${this.state.currentRoomData.id}/messages`);
        this.setState({
            currentMessages: response.data,
        })
    }

    async updateMessages(message) {
        this.setState({
            currentMessages: [...this.state.currentMessages, message]
        })
    }

    // Group Data Loading
    async getGroupData(group_id) {
        const response = await axios(`${this.props.baseURL}/groups/${group_id}`);
        this.setState({
            groupData: response.data,
            loaded: true,
            currentGroupID: group_id
        })
        this.changeRoomData(response.data.rooms[0].id);
        this.buildRollingDeck();
    }

    // Room Data Loading
    async changeRoomData(room_id){
        const response = await axios(`${this.props.baseURL}/groups/${this.state.groupData.id}/rooms/${room_id}`);
        this.setState({
            currentRoomData: response.data,
        })
        this.getMessages();
    }

    // Build rolling deck based on group's selected categories
    buildRollingDeck() {
        const newDeck = [];
        this.state.groupData.categories.map((category) => {
          category.decks.map((deck) => {
            deck.cards.map((card) => {
              newDeck.push(card);
            })
          })
        })
    
        this.setState({
          rollingDeck: newDeck
        })
      }


    renderCenterComponent() {
        if(this.state.pageConfig == 'chat'){
            return (
                    <ChatBoxComponent currentRoomData={this.state.currentRoomData} currentUser={this.props.currentUser} handleMessageSubmission={this.handleMessageSubmission} currentMessages={this.state.currentMessages} updateMessages={this.updateMessages}/>
            )
        } else if (this.state.pageConfig == 'gacha') {
            return (
                <RollingSiteComponent rollingDeck={this.state.rollingDeck}/>
            )
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <LeftControlPanelComponent currentUser={this.props.currentUser} rooms={this.state.groupData.rooms} changePageConfig={this.changePageConfig} changeRoomData={this.changeRoomData} owner={this.state.groupData.owner}/>
                    {this.state.loaded ? this.renderCenterComponent() : null}
                    <RightMemberListComponent owner={this.state.groupData.owner} users={this.state.groupData.users}/>
                </Row>
            </div>
        )
    }

}

export default GroupCoreComponent;