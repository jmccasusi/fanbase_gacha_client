import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import ChatboxComponent from './group/ChatboxComponent';

class CenterComponent extends React.Component {
    render() {
        return (
            <Col className='d-flex flex-column col-md-6 align-items-center border border-dark px-4 py-2 w-100 defaultHeight'>
              
                
                <ChatboxComponent groupData={this.props.groupData}/>

            </Col>
        )
    }

}

export default CenterComponent;