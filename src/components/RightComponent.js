import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class RightComponent extends React.Component {
    render() {
        return (
            <Col className='d-none d-md-block border border-dark p-3 scrollVertical defaultHeight'>
              <Row className='align-items-center p-3'>
                Creator/GM
              </Row>
              <div className='col-12'>
                <div className='d-flex flex-row'>Member</div>
              </div>
              <Row className='align-items-center p-3'>
              <div className='col-12'>
                {
                  this.props.groupData.users.map(member => {
                    return (
                      <div className='d-flex flex-row'>{member.username}</div>
                    )
                  })
                }
              </div>
              </Row>
            </Col>
        )
    }

}

export default RightComponent;