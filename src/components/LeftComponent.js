import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import LeftControlPanelComponent from './group/LeftControlPanelComponent';

class LeftComponent extends React.Component {
    render() {
        return (
            <>
            { this.props.currentUser !== null ?
              (<LeftControlPanelComponent groupData={this.props.groupData} changeRoom={this.props.changeRoom} currentUser={this.props.currentUser}/>) :
              null
            }
            </>
        )
    }

}

export default LeftComponent;