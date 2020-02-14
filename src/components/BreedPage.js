import React from "react";

export default class BreedPage extends React.Component {
  state = {
    breed: []
  };
  componentDidMount() {
    const breedId = this.props.match.params.breed;
    //console.log("check params", this.props.match.params.breed);
    return fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`)
      .then(res => res.json())
      .then(data => {
        const breeds = data.map(breed => {
          return {
            id: breed.id,
            name: breed.name,
            temperament: breed.temperament,
            description: breed.description
          };
        });
        this.setState({ breed: breeds });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  render() {
    console.log(this.state.breed);
    return (
      <div className="Breed">
        <h1>{this.state.breed}</h1>

        <p>{this.props.information}</p>
        <p>{this.props.behaviour}</p>
      </div>
    );
  }
}
