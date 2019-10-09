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
        className: "modal-hidden",
    }

    async componentDidMount(){
        try{

            const boardId = await fetch(`https://api.trello.com/1/cards/${this.props.match.params.cardId}/board?fields=id,url,name&key=${KEY}&token=${TOKEN}`);
            const boardIdJson = await boardId.json();

            const cardIdInList = await fetch(`https://api.trello.com/1/cards/${this.props.match.params.cardId}/list?fields=id&key=${KEY}&token=${TOKEN}`);
            const cardIdInListJson = await cardIdInList.json();

            const lists = await fetch(`https://api.trello.com/1/boards/${boardIdJson.id}/lists?key=${KEY}&token=${TOKEN}`);
            const listsJson = await lists.json();

            const cards = await fetch(`https://api.trello.com/1/lists/${cardIdInListJson.id}/cards?key=${KEY}&token=${TOKEN}`);
            const cardsJson = await cards.json();
            const cardSelected = cardsJson.filter( card => card.shortLink == this.props.match.params.cardId);

            cardSelected[0]["boardUrl"] = boardIdJson.url.replace("https://trello.com",""); 

            this.setState({
                boardName: boardIdJson.name,
                boardLists : listsJson,
                cardsInfo : cardSelected[0]
            });
        }
        catch (err){
            console.log(err);
        }
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
                    <button className="addNewCard" onClick={this.addNewCard}>&#43; Add another card</button>
                    </div>
                    )
                } )
            }
            </div>
            <Modal cardInfo={this.state.cardsInfo} className={this.state.className}/>
            </section>
        );
    }
}

export default cardModal;