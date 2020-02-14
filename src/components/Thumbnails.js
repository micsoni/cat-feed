import React from "react";

export default class Thumbnail extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        <div className="fact-text">{this.props.name}</div>
      </div>
    );
  }
}
