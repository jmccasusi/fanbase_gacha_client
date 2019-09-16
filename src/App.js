import React from 'react'
import axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import HeaderComponent from './components/HeaderComponent';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import CenterComponent from './components/CenterComponent';
import AlertComponent from './components/AlertComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      centerPanel: 'roll',
      loaded: false,
      alert: '',
      groupData: {},
      rollingDeck: [],
      currentRoomIndex: 0,
      currentRoomID: 0,
      currentGroupID: 0,
      currentUser: null
    }
    this.getGroupData = this.getGroupData.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.handleMessageSubmission = this.handleMessageSubmission.bind(this);
    this.changeCenterPanel = this.changeCenterPanel.bind(this);

    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);

    this.buildRollingDeck = this.buildRollingDeck.bind(this);
  }

  // Login user using JWT
  async loginUser(jwt) {
      const config = { 
        headers: {
          "Authorization": `Bearer ${jwt}`
        }
      }
      const currentUser = await axios.get(`http://localhost:3000/users`, config)
      
      console.log(currentUser.data);
      
      this.setState({
        currentUser: currentUser.data
    })
  }

  // Check sessionstorage for JWT and then log in
  checkSession() {
    if (sessionStorage.getItem('jwt')) {
      const jwt = sessionStorage.getItem('jwt');
      this.loginUser(jwt);
      // this.changeCenterPanel('chatbox');
    }
  }

  // Log out User
  logoutUser() {
    sessionStorage.removeItem('jwt');
    this.setState({
      currentUser: null,
      centerPanel: 'login'
    });
  }

  // Page Layout Control for Center Panel
  changeCenterPanel(component){
    this.setState({
      centerPanel: component
    })
  }

/////////////////////////////////////////////

  // For Room
  changeRoom(room_id) {
    this.state.groupData.rooms.map( (room, index) => {
      if(room.id === room_id){
        this.setState(
          {
            currentRoomIndex: index,
            currentRoomID: room_id
          }
        )
      }
    })
  }

  // For Chat
  async handleMessageSubmission(messageContent) {
    await axios.post(`http://localhost:3000/groups/${this.state.currentGroupID}/rooms/${this.state.currentRoomID}/messages`, {
      content: messageContent,
      user_id: this.state.currentUser.id
    });

    this.getGroupData(this.state.currentGroupID);
  }

  /////////////////////////////////////////////

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


  /////////////////////////////////////////////

  // Group Data Loading
  async getGroupData(group_id) {
    const response = await axios(`http://localhost:3000/groups/${group_id}`);
    this.setState({
      groupData: response.data,
      loaded: true,
      currentGroupID: group_id
    })
    this.buildRollingDeck()
    console.log(this.state.groupData)
  }

  async componentDidMount() {
    await this.getGroupData(1);
    this.setState({
      currentRoomID: this.state.groupData.rooms[0].id
    })
    await this.checkSession();
  }

  // Make sure group data is loaded before rendering anything
  content() {
    return(
      <div className="overflow-hidden">
        <HeaderComponent currentUser={this.state.currentUser} logoutUser={this.logoutUser}/>
        <AlertComponent/>
        <div>
          <Row>
            <LeftComponent groupData={this.state.groupData} changeRoom={this.changeRoom} currentUser={this.state.currentUser}/>
            <CenterComponent rollingDeck={this.state.rollingDeck} centerPanel={this.state.centerPanel} changeCenterPanel={this.changeCenterPanel} groupData={this.state.groupData} currentRoomIndex={this.state.currentRoomIndex} handleMessageSubmission={this.handleMessageSubmission} currentUser={this.state.currentUser} loginUser={this.loginUser}/>
            <RightComponent groupData={this.state.groupData} currentUser={this.state.currentUser}/>
          </Row>
        </div>
      </div>
    )

  }

 render() {
    return (
      <div>
        {this.state.loaded ? this.content() : null}
      </div>
    )
  }
}

export default App;
