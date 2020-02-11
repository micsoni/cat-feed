import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="fact-text">{this.props.text}</div>
        <img className="image" src={this.props.src} />

        <button onclick="">comment</button>
      </div>
    );
  }
}
