import React from "react";

export default class Thumbnail extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        <img className="image" src={this.props.src} alt="useful" />
        <div className="fact-text">{this.props.text}</div>
      </div>
    );
  }
}
