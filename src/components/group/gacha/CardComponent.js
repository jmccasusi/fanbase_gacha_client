import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class CardComponent extends React.Component {
    render() {
        return (
            <>
            <div class="card character-card">
                <div class="card-body d-flex flex-column overflow-hidden">
                    <h6 class="card-title character-card-text">{this.props.card.name}</h6>
                </div>
                <div class="card-body d-flex flex-column overflow-hidden">
                    <h6 class="card-text character-card-text">{this.props.card.deck.name}</h6>
                </div>
                <img src={this.props.card.img_url} class="card-img-top" alt="..."/>
                <a href="#" class="btn btn-success">Claim</a>
            </div>
            </>
        )
    }

}

export default CardComponent;