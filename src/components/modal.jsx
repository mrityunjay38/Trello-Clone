import React, { Component } from 'react';
import "../modal.css";

class Modal extends Component {

    render(){
        console.log(this.props.cardInfo);
        return (
            <div className="modal-overlay">
            <div className="modal-view">
            <h2>{this.props.cardInfo.name}</h2>
            <p>{this.props.cardInfo.desc}</p>
            </div>
            </div>
        );
    }
}

export default Modal;