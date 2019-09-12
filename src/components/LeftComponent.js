import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class LeftComponent extends React.Component {
    render() {
        return (
            <Col className='d-none d-md-block flex-column align-items-center border border-dark p-3 scrollVertical defaultHeight'>
              <Row className='flex-row justify-content-center  border-bottom w-100 my-2 py-2'>
                  <h5>User Name</h5>
              </Row>
              <Row className='flex-row justify-content-center  border-bottom my-2 w-100 py-2'>
                <div className="flex-column align-items-center">
                  <h5>Chat Room</h5>
                  <li>Channel 1</li>
                  <li>Channel 2</li>
                  <li>Channel 3</li>
                </div>
              </Row>
              <Row className='flex-row justify-content-center  border-bottom w-100 my-2 py-2'>
                <div className="flex-column align-items-center">
                  <h5>Gacha Game</h5>
                  <li>Rolling Site</li>
                  <li>Voting Likes</li>
                  <li>Trading Hall</li>
                </div>
              </Row>
            </Col>
        )
    }

}

export default LeftComponent;