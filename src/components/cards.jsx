import React, { Component } from 'react';
import "../Cards.css"

const KEY = '4889527730924708de702aa5a0633ee7';
const TOKEN = '9ecc207787dc2989a558d492d51d8b5df086937e33319a89d54f3a9907a43558';

class Cards extends Component {

    state = {
        cards: []
    }

    async componentDidMount(){
        try{
            const cards = await fetch(`https://api.trello.com/1/lists/${this.props.listId}/cards?key=${KEY}&token=${TOKEN}`);
            const cardsJson = await cards.json();
            this.setState({
                cards : cardsJson
            });
        }
        catch (err){
            console.log(err);
        }
    }

    render(){
        return (
            <div className="cards">
            {
                this.state.cards.map( card => {
                    return (
                        <a href="#" className="card">
                        <span className="card-name">{card.name}</span>
                        <span className="badge"/>
                        </a>
                    )
                } )
            }
            </div>
        );
    }
}

export default Cards;