import React, { Component } from 'react';

const KEY = '4889527730924708de702aa5a0633ee7';
const TOKEN = '9ecc207787dc2989a558d492d51d8b5df086937e33319a89d54f3a9907a43558';

class Board extends Component {
    // state = {
    //     lists: []
    // }

    // async componentDidMount(){
    //     try{
    //         const lists = await fetch(`https://api.trello.com/1/boards/${this.props.match.params.boardId}/lists?key=${KEY}&token=${TOKEN}`);
    //         const listsJson = await lists.json();
    //         this.setState({
    //             lists : listsJson
    //         });
    //     }
    //     catch (err){
    //         console.log(err);
    //     }
    // }

    render(){
        console.log(this.props.match);
        return <h1>Lists</h1>;
    }
}

export default Board;