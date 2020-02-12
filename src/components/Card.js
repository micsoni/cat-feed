import React from "react";
import PropTypes from "prop-types";

export default class Card extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  };
  render() {
    return (
      <div className="card">
        <img className="image" src={this.props.src} alt="useful" />
        {/* <b>{this.state.numLikes}</b> */}
        <div>{this.props.likes}</div>
        <button onClick={this.props.likeCard}>More Cats!</button>
        {/* <div className="fact-text">{this.props.text}</div> */}
      </div>
    );
  }
}
