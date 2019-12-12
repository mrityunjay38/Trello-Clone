import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "../modal.css";

class Modal extends Component {

    state = {
        close: "flex",
        redirect : false,
        cardEditable : "false",
        valueH2 : ""
    }

    closeModal = () => {
        this.props.addHeading({heading: this.state.valueH2, cardId: this.props.cardInfo.shortLink});
        this.setState({
            close : "none",
            redirect : true
        });
    }

    makeEditable = () => {
        this.setState({
            cardEditable : "true"
        });
    }

    // handleHeading = (e) => {
    //     this.setState({
    //         valueH2 : e.target.innerText
    //     });
    // }

    handleHeading = (e) => {
        this.setState({
            valueH2 : e.target.value
        });
    }


    render(){
        // console.log(this.props.cardInfo);
        return (
            <React.Fragment>
            <div style={{display: this.state.close}} className="modal-overlay" onClick={this.closeModal}/>
            <div contentEditable={this.state.cardEditable} className="modal-view" onClick={this.makeEditable}>
            <span className="close-btn" onClick={this.closeModal}>&times;</span>
            <textarea cols="50"  value={this.props.cardInfo.name} onChange={this.handleHeading}>{this.props.cardInfo.name}</textarea>
            <p>{this.props.cardInfo.desc}</p>
            </div>
            {this.state.redirect ? <Redirect to={this.props.cardInfo.boardUrl}/> : null}
            </React.Fragment>
        );
    }
}

export default Modal;