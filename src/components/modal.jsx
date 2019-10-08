import React, { Component } from 'react';
import "../modal.css";

class Modal extends Component {

    state = {
        close: "flex"
    }

    closeModal = () => {
        this.setState({
            close : "none"
        });
    }

    render(){
        console.log(this.props.cardInfo);
        return (
            <div style={{display: this.state.close}} className="modal-overlay" onClick={this.closeModal}>
            <div className="modal-view">
            <span className="close-btn">&times;</span>
            <h2>{this.props.cardInfo.name}</h2>
            <p>{this.props.cardInfo.desc}</p>
            </div>
            </div>
        );
    }
}

export default Modal;