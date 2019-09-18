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
    async buildRollingDeck() {
        const newDeck = [];
        this.state.groupData.categories.map((category) => {
          category.decks.map((deck) => {
            deck.cards.map((card) => {
                card.isClaimed = false;
                newDeck.push(card);
            })
          })
        })

        const response = await axios.post(`${this.props.baseURL}/group_cards`, {
            group_id: this.state.currentGroupID
        })

        const group_cards = response.data;
        console.log(response.data);

        const newDeckWithOwners = newDeck.map((card) => {
            group_cards.map((group_card) => {
                if(card.id == group_card.card_id){
                    card.isClaimed = true;
                    card.owner = group_card.user
                }
            })
            return card;
        })
    
        this.setState({
          rollingDeck: newDeckWithOwners
        })

        console.log('hello')
      }


    renderCenterComponent() {
        if(this.state.pageConfig == 'chat'){
            return (
                    <ChatBoxComponent currentRoomData={this.state.currentRoomData} currentUser={this.props.currentUser} handleMessageSubmission={this.handleMessageSubmission} currentMessages={this.state.currentMessages} updateMessages={this.updateMessages}/>
            )
        } else if (this.state.pageConfig == 'gacha') {
            return (
                <RollingSiteComponent rollingDeck={this.state.rollingDeck} buildRollingDeck={this.buildRollingDeck} currentUser={this.props.currentUser} baseURL={this.props.baseURL}/>
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