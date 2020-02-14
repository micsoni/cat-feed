import React from "react";

export default class BreedPage extends React.Component {
  render() {
    return (
      <div className="Breed">
        <h1>{this.props.title}</h1>
        <p>{this.props.information}</p>
        <p>{this.props.behaviour}</p>
      </div>
    );
  }
}
