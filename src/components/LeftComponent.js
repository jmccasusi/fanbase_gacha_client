import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import LeftControlPanelComponent from './group/LeftControlPanelComponent';

class LeftComponent extends React.Component {
    render() {
        return (
            <>
              <LeftControlPanelComponent groupData={this.props.groupData} changeRoom={this.props.changeRoom}/>
            </>
        )
    }

}

export default LeftComponent;