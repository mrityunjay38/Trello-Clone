import React, { Component } from "react";

export default class addNewCard extends Component {

    state = {
        value : ""
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value
        });
    }

    addNewCard = (e) => {
        e.preventDefault();
        const newCard = {
            id: Math.random(),
            name: this.state.value
        }

        newCard['url'] = `/c/${newCard.id}/${newCard.name}`;

        this.props.newCard(newCard);
        this.setState({
            value : ""
        });
    }

  render() {
    return (
      <form onSubmit={this.addNewCard}>
        <input value={this.state.value}
          className="addNewCard"
          placeholder="Enter card title here..." onChange={this.handleChange}>
          </input>
        <button type="submit" hidden />
      </form>
    );
  }
}
