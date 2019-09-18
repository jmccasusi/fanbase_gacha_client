import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'
import CardComponent from './CardComponent';

class RollingSiteComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rolledCards: []
        }
        this.rollCards = this.rollCards.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    // Get 3 random cards from the rolling deck
    rollCards(){
        const arr = this.props.rollingDeck;
        let n = 3;

        let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        this.setState({
            rolledCards: result
        })
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidMount(){
        this.rollCards();
        this.scrollToBottom();
        this.rollCards();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    render() {
        return (
           <Col className="d-flex flex-column col-lg-8 align-items-center border border-dark px-4 py-2 w-100 defaultHeight">
            <Row className='flex-row justify-content-center border-bottom w-100'>
                <h5>GACHA - Rolling Site</h5>
            </Row>
            <Row>
            <Col xs={12} className='d-flex flex-row justify-content-center jumbotron scrollVertical2'ref={(div) => {
                this.messageList = div;
            }}>
                {
                    this.state.rolledCards.map((card) => {
                        return (
                            <CardComponent card={card} buildRollingDeck={this.props.buildRollingDeck} currentUser={this.props.currentUser} baseURL={this.props.baseURL}/>
                        )
                    })
                }
                <div ref={this.messagesEndRef} />
            </Col>
            </Row>
            <Row>
                <Button onClick={this.rollCards}>ROLL</Button>
            </Row>
           </Col>
        )
    }

}

export default RollingSiteComponent;