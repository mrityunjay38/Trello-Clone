import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "../modal.css";

class Modal extends Component {

    state = {
        close: "flex",
        redirect : false
    }

    closeModal = () => {
        console.log(this.props.cardInfo.boardUrl);
        this.setState({
            close : "none",
            redirect : true
        });
        // return this.props.history.push(this.props.cardInfo.boardUrl);
        // console.log("/b/" + this.props.idBoard);
        // return <Redirect to={{pathname: this.props.cardInfo.boardUrl}}/>
    }

    render(){
        // console.log(this.props.cardInfo);
        return (
            <React.Fragment>
            <div style={{display: this.state.close}} className="modal-overlay" onClick={this.closeModal}>
            <div className="modal-view">
            <span className="close-btn">&times;</span>
            <h2>{this.props.cardInfo.name}</h2>
            <p>{this.props.cardInfo.desc}</p>
            </div>
            </div>
            {this.state.redirect ? <Redirect to={this.props.cardInfo.boardUrl}/> : null}
            </React.Fragment>
        );
    }
}

export default Modal;