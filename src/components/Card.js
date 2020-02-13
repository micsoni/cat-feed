import React from "react";
import PropTypes from "prop-types";

export default class Card extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  };

  // Not needed because we call the incrementLike prop-callback from the parent!
  // Try to keep the data handling functionality inside the data component...
  // handleClick = () => {
  //   console.log("handleClick");
  //   this.props.incrementLike(this.props.id);
  // };

  render() {
    return (
      <div className="card">
        <img className="image" src={this.props.src} alt="useful" />
        <div>{this.props.likes}</div>
        <button onClick={this.props.incrementLike}>More Cats!</button>
        {/* <div className="fact-text">{this.props.text}</div> */}
      </div>
    );
  }
}
