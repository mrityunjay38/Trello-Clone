import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from "./modal";

class Card extends Component {

    state = {
        cardOpen: false,
        className: "modal-hidden",
        display: "flex"
    }

    showModal = (e) => {
        e.preventDefault();
        this.setState({
            cardOpen: !this.state.cardOpen,
            className: "modal-visible"
        });
    }

    closeModal = () => {
        console.log("close");
        this.setState({
            display: this.state.display == "flex" ? "none" : "flex"
        });
    }

    render(){
        // console.log(this.props);
        return (
            <React.Fragment>
            <Link to={this.props.cardInfo.url.replace("https://trello.com","")} className="card" onClick={this.showModal}>
            <span className="card-name">{this.props.cardInfo.name}</span>
            <span className="badge"/>
            </Link>
            {this.state.cardOpen ? (<Modal cardInfo={this.props.cardInfo} className={this.state.className} onClick={this.closeModal}/>): null}
            </React.Fragment>
        );
    }
}

export default Card;