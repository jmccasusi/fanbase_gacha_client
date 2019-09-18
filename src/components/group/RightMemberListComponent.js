import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class RightComponent extends React.Component {
    render() {
        return (
            <Col className='d-none d-lg-block border border-dark p-3 scrollVertical defaultHeight'>
              <div className='col-12'>
                <div className='d-flex flex-row font-weight-bold'>Group Owner</div>
              </div>
              <Row className='align-items-center p-3'>
              <div className='col-12'>
                {
                    this.props.owner ? (
                        <div className='d-flex flex-row'>⚫ {this.props.owner.username}</div>
                    ) : null
                }
              </div>
              </Row>
              <div className='col-12'>
                <div className='d-flex flex-row font-weight-bold'>Members</div>
              </div>
              <Row className='align-items-center p-3'>
              <div className='col-12'>
                {
                    this.props.users ? (this.props.users.map(member => {
                    return (
                      <div className='d-flex flex-row'>⚫ {member.username}</div>
                    )
                  })) : null
                }
              </div>
              </Row>
            </Col>
        )
    }

}

export default RightComponent;