import React from 'react'
import axios from 'axios';
import { Container, Row, Col, Alert } from 'react-bootstrap'
import HeaderComponent from './components/HeaderComponent';
import AlertComponent from './components/AlertComponent';
import GroupCoreComponent from './components/GroupCoreComponent';
import StrangerCoreComponent from './components/StrangerCoreComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      alert: '',
      currentUser: null,
      coreConfig: 'group'
    }

    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.changeCoreConfig = this.changeCoreConfig.bind(this);

    this.baseURL = 'https://fanbase-gacha-api.herokuapp.com';
    // this.baseURL = 'http://localhost:3000';
  }

  // Login user using JWT
  async loginUser(jwt) {
      const config = { 
        headers: {
          "Authorization": `Bearer ${jwt}`
        }
      }
      const currentUser = await axios.get(`${this.baseURL}/users`, config)
      
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

/////////////////////////////////////////////



  resetMessages(messageArray){
    // this.setState({
    //     messages: messageArray
    // })
    if(this.state.messages.length !== messageArray){
      this.getGroupData(this.state.currentGroupID);
    }
    this.setState({
        messages: this.state.groupData.rooms[`${this.state.currentRoomIndex}`].messages
    })
  }

  /////////////////////////////////////////////


  /////////////////////////////////////////////

  

  async componentDidMount() {
    await this.checkSession();
  }

  // Make sure group data is loaded before rendering anything
  // content() {
  //   return(
  //     <div className="overflow-hidden">
  //       <HeaderComponent currentUser={this.state.currentUser} logoutUser={this.logoutUser}/>
  //      { /*<AlertComponent/>*/}
  //       <div>
  //         <Row>
  //           <LeftComponent groupData={this.state.groupData} changeRoom={this.changeRoom} currentUser={this.state.currentUser} changeCenterPanel={this.changeCenterPanel} resetMessages={this.resetMessages} currentRoomIndex={this.state.currentRoomIndex}/>
  //           <CenterComponent rollingDeck={this.state.rollingDeck} centerPanel={this.state.centerPanel} changeCenterPanel={this.changeCenterPanel} groupData={this.state.groupData} currentRoomIndex={this.state.currentRoomIndex} handleMessageSubmission={this.handleMessageSubmission} currentUser={this.state.currentUser} loginUser={this.loginUser} messages={this.state.messages} resetMessages={this.resetMessages}/>
  //           <RightComponent groupData={this.state.groupData} currentUser={this.state.currentUser}/>
  //         </Row>
  //       </div>
  //     </div>
  //   )

  // }

  changeCoreConfig(component) {
    this.setState({
      coreConfig: component
    })
  }

  renderCoreComponent() {
      if(this.state.coreConfig == 'group' && this.state.currentUser !== null) {
        return(
          <GroupCoreComponent baseURL={this.baseURL} currentUser={this.state.currentUser}/>
         )
      } else {
        return (
          <StrangerCoreComponent baseURL={this.baseURL} loginUser={this.loginUser} changeCoreConfig={this.changeCoreConfig}/>
        )
      }
  }

 render() {
    return (
      <div>
      <div className="overflow-hidden">
        <HeaderComponent currentUser={this.state.currentUser} logoutUser={this.logoutUser} changeCoreConfig={this.changeCoreConfig}/>
          { /*<AlertComponent/>*/}
           {this.renderCoreComponent()}
        </div>
      </div>
    )
  }
}

export default App;
