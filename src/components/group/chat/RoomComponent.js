import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class RoomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidMount () {
        // for testing purposes: sending to the echo service which will send it back back
        // setInterval( _ =>{
        //     this.connection.send( Math.random() )
        // }, 2000 )

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
                            <div className="d-flex flex-column">
                                <div className={
                                    message.user.id == this.props.currentUser.id ? ("message-user message-current-user") : ("message-user")
                                }>
                                {
                                    message.user.id == this.props.currentUser.id ? (message.user.username + " (YOU)") : (message.user.username)
                                }
                                </div>
                                <div className={
                                    message.user.id ==  this.props.currentUser.id ? ("message message-current") : ("message")
                                }>{message.content}</div>
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