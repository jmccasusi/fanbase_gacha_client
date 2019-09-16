import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

class CardComponent extends React.Component {
    render() {
        return (
            <>
            <div class="card character-card">
                <img src="http://noodleblvd.com/wp-content/uploads/2016/10/No-Image-Available.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title overflow-hidden">{this.props.card.name}</h5>
                    <p class="card-text">{this.props.card.deck_id}</p>
                    <a href="#" class="btn btn-primary">Claim</a>
                </div>
            </div>
            </>
        )
    }

}

export default CardComponent;