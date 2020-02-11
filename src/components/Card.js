import React from "react";

export default class Card extends React.Component {
  state = {
    likes: 0
  };

  likeCard = () => this.setState({ likes: this.state.likes + 1 });

  render() {
    return (
      <div className="card">
        <img className="image" src={this.props.src} alt="useful" />
        {/* <b>{this.state.numLikes}</b> */}
        <div>{this.state.likes}</div>
        <button onClick={this.likeCard}>More Cats!</button>
        <div className="fact-text">{this.props.text}</div>
      </div>
    );
  }
}
