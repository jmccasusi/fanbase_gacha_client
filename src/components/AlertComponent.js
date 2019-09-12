import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class AlertComponent extends React.Component {
    render() {
        return (
            <Alert variant={'primary'}>
                This is an alert—check it out!
            </Alert>
        )
    }

}

export default AlertComponent;