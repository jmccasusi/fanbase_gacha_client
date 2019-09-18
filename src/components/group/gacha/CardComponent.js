import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import axios from 'axios';

class CardComponent extends React.Component {
    async claimCard(card_id) {

        const newOwnership = {
            group_id: 1,
            card_id: card_id,
            user_id: this.props.currentUser.id
        }

        console.log(newOwnership);
        
        await axios.post(`${this.props.baseURL}/claim`, newOwnership)
    }

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
                {
                    !this.props.card.isClaimed ? 
                    (<a href="#" class="btn btn-success" onClick={() => {
                        this.claimCard(this.props.card.id).then(() => {
                            this.props.buildRollingDeck();
                        })
                    }}>Claim</a>) :
                    (<h6 class="btn btn-secondary">Owned by: {this.props.card.owner.username}</h6>)
                    
                }
            </div>
            </>
        )
    }

}

export default CardComponent;