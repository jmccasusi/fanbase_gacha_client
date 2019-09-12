import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class CenterComponent extends React.Component {
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
            <Col className='d-flex flex-column col-md-6 align-items-center border border-dark px-4 py-2 w-100 defaultHeight'>
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
        )
    }

}

export default CenterComponent;