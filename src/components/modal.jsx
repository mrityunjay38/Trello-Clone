import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "../modal.css";

class Modal extends Component {

    state = {
        close: "flex",
        redirect : false,
        cardEditable : "false"
    }

    closeModal = () => {
        console.log(this.props.cardInfo.boardUrl);
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

    render(){
        console.log("culprit" + this.props.cardInfo);
        return (
            <React.Fragment>
            <div style={{display: this.state.close}} className="modal-overlay" onClick={this.closeModal}/>
            <div contentEditable={this.state.cardEditable} className="modal-view" onClick={this.makeEditable}>
            <span className="close-btn" onClick={this.closeModal}>&times;</span>
            <h2>{this.props.cardInfo.name}</h2>
            <p>{this.props.cardInfo.desc}</p>
            </div>
            
            {this.state.redirect ? <Redirect to={this.props.cardInfo.boardUrl}/> : null}
            </React.Fragment>
        );
    }
}

export default Modal;