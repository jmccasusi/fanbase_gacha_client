import React from 'react'
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
      alert: ''
    }
  }

  render() {
    return (
      <div className="overflow-hidden">
        <HeaderComponent/>
        <AlertComponent/>
        <div>
          <Row>
            <LeftComponent/>
            <CenterComponent/>
            <RightComponent/>
          </Row>
        </div>
      </div>
    )
  }
}

export default App;
