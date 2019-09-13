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
      loaded: false,
      alert: '',
      groupData: {}
    }
    this.getGroupData = this.getGroupData.bind(this);
  }

  async getGroupData(group_id) {
    const response = await axios(`http://localhost:3000/groups/${group_id}`);
    this.setState({
      groupData: response.data,
      loaded: true
    })
    console.log(this.state.groupData)
  }

  async componentDidMount() {
    await this.getGroupData(1);
  }

  content() {
    return(
      <div className="overflow-hidden">
        <HeaderComponent/>
        <AlertComponent/>
        <div>
          <Row>
            <LeftComponent/>
            <CenterComponent groupData={this.state.groupData}/>
            <RightComponent groupData={this.state.groupData}/>
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
