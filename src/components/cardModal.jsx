import React, { Component } from 'react';
import Cards from "./cards";
import Modal from "./modal";

const KEY = '4889527730924708de702aa5a0633ee7';
const TOKEN = '9ecc207787dc2989a558d492d51d8b5df086937e33319a89d54f3a9907a43558';

class cardModal extends Component {

    state = {
        boardName: "",
        boardLists : [],
        cardsInfo : [],
        cardOpen: false,
        className: "modal-hidden",
        display: "flex"
    }

    async componentDidMount(){
        try{
            const board = await fetch(`https://api.trello.com/1/cards/${this.props.match.params.cardId}/board?key=${KEY}&token=${TOKEN}`);
            const boardJson = await board.json();

            const cardInList = await fetch(`https://api.trello.com/1/cards/${this.props.match.params.cardId}/list?&key=${KEY}&token=${TOKEN}`);
            const cardInListJson = await cardInList.json(); 

            const lists = await fetch(`https://api.trello.com/1/boards/${boardJson.id}/lists?key=${KEY}&token=${TOKEN}`);
            const listsJson = await lists.json();

            const cards = await fetch(`https://api.trello.com/1/lists/${cardInListJson.id}/cards?key=${KEY}&token=${TOKEN}`);
            const cardsJson = await cards.json();
            const cardSelected = cardsJson.filter( card => card.shortLink == this.props.match.params.cardId);

            // cardSelected[0]["boardShortId"] = boardJson.shortLink;
            cardSelected[0]["boardUrl"] = boardJson.url.replace("https://trello.com",""); 

            this.setState({
                boardName: boardJson.name,
                boardLists : listsJson,
                // cardsInfo : cardsJson,
                cardsInfo : cardSelected[0]
            });
        }
        catch (err){
            console.log(err);
        }
    }

    showModal = (e) => {
        // e.preventDefault();
        this.setState({
            cardOpen: !this.state.cardOpen,
            className: "modal-visible"
        });
    }

    closeModal = () => {
        console.log("Close clicked");
    }

    render(){
        // console.log(this.state.cardsInfo);
        return (
            <section className="board-lists">
            <h1>{this.state.boardName}</h1>
            <div className="lists">
            {
                this.state.boardLists.map( list => {
                    return (
                    <div key={list.id} className="list">
                    <div className="list-title">
                    <h2>{list.name}</h2>
                    </div>
                    <Cards listId={list.id}/>
                    </div>
                    )
                } )
            }
            </div>
            <Modal cardInfo={this.state.cardsInfo} className={this.state.className} onClick={this.closeModal}/>
            </section>
        );
    }
}

export default cardModal;