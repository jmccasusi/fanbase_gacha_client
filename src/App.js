import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }


  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="overflow-hidden">
        <Alert variant={'primary'}>
          This is an alert—check it out!
        </Alert>
        <div>
          <Row>
            <Col className='d-none d-md-block flex-column align-items-center border rounded-sm border-dark p-3 scrollVertical'>
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
            <Col className='d-flex flex-column col-md-6 align-items-center border rounded-sm border-dark px-4 py-2 w-100'>
              <Row className='flex-row justify-content-center border-bottom w-100'>
                <h2>Group Name</h2>
              </Row>
              <Row className='flex-row justify-content-center border-bottom w-100'>
                <h5>Chat Room 1</h5>
              </Row>
              <Row className="w-100">
                <Col xs={12} className='MessageList flex-column jumbotron scrollVertical2' ref={(div) => {
          this.messageList = div;
        }}>
                <div>
                  <h5>Conversations</h5>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>
                <div>
                  <h6>
                    Hello!
                  </h6>
                </div>

                <div ref={this.messagesEndRef} />
                </Col>
              </Row>
              <Row className="w-100">
                <Col xs={12} className="p-0">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="input-group-text">+</button>
                  </div>
                    <input type="text" class="form-control"/>
                  <div class="input-group-append">
                    <button class="input-group-text">Send</button>
                  </div>
                </div>
                </Col>
              </Row>
            </Col>
            <Col className='d-none d-md-block border rounded-sm border-dark p-3 scrollVertical'>
              <Row className='align-items-center p-3'>
                Creator/GM
              </Row>
              <div className='col-12'>
                <div className='d-flex flex-row'>Member</div>
              </div>
              <Row className='align-items-center p-3'>
              <div className='col-12'>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
                <div className='d-flex flex-row'>Member</div>
              </div>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App;
