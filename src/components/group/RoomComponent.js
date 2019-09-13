import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class RoomComponent extends React.Component {
    constructor(props) {
        super(props)
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
                <Col xs={12} className='MessageList flex-column jumbotron scrollVertical2' ref={(div) => {
                    this.messageList = div;
                }}>
                    <div>
                    <h5>Conversations</h5>
                    </div>
                    
                {
                    this.props.messages.map(message => {
                        return(
                            <div>
                                <div className="message-user">
                                    {message.user.username}
                                </div>
                                <div className="message">{message.content}</div>
                            </div>
                        )
                    })
                }

                <div ref={this.messagesEndRef} />
                </Col>
        )
    }

}

export default RoomComponent;