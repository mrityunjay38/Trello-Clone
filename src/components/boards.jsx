import React, { Component } from "react";
import { Link } from "react-router-dom";
import boardsJson from "../data/boards.json";

const apiKey = "4889527730924708de702aa5a0633ee7";
const secretToken =
  "9ecc207787dc2989a558d492d51d8b5df086937e33319a89d54f3a9907a43558";

class Boards extends Component {
  state = {
    boards: boardsJson
  };

  // state = {
  //     boards : []
  // }

  // async componentDidMount(){
  //     try{
  //         const boards = await fetch(`https://api.trello.com/1/members/mrityunjay19/boards?key=${KEY}&token=${TOKEN}`);
  //         const boardsJson = await boards.json();
  //         this.setState({
  //             boards : boardsJson
  //         });
  //     }
  //     catch (err){
  //         console.log(err);
  //     }
  // }

  render() {
    return (
      <section className="boards">
        <ul>
          {this.state.boards.map(board => {
            const backgroundImg = board.prefs.backgroundImage;
            return (
              <li key={board.id}>
                <Link
                  className="board-tile"
                  to={board.url.replace("https://trello.com", "")}
                  style={{ backgroundImage: `url(${backgroundImg})` }}
                >
                  {board.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Boards;
