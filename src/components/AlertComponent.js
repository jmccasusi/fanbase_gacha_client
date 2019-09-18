import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class AlertComponent extends React.Component {
    render() {
        return (
            <Alert variant={this.props.alertType}>
                {this.props.alertMessage}
            </Alert>
        )
    }

}

export default AlertComponent;