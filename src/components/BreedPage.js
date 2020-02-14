import React from "react";

export default class BreedPage extends React.Component {
  state = {
    loading: true
    // breed: {} // breed: {id="", desc}
  };
  componentDidUpdate(prevProps) {
    console.log(prevProps.match.params);

    if (prevProps.match.params.breed === this.props.match.params.breed) {
      return;
    }
    const breedId = this.props.match.params.breed;
    console.log("check params", this.props.match.params.breed);
    return (
      // fetch(`https://api.thecatapi.com/v1/breeds/search?breed_id=${breedId}`)
      fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`)
        // https://api.thecatapi.com/v1/breeds/search?q=abob
        .then(res => res.json())
        .then(data => {
          console.log("data: ", data);

          const breed = data.find(breed => breed.id === breedId);
          console.log("breed", breed);

          //  const { id: breed.id, desc: breed.description, temp: breed.temperament, name: breed.name}
          this.setState({
            breed: {
              id: breed.id,
              desc: breed.description,
              temp: breed.temperament,
              name: breed.name
            },
            loading: false
          });

          // console.log("state", this.state);
          // console.log("state.breed:", this.state.breed);
          // console.log("state.breed:", this.state.breed.id);
        })
        .catch(error => {
          this.setState({ error: true });
          console.log("error:", error);
        })
    );
  }

  render() {
    // console.log("render working?");
    // return <div></div>;

    if (this.state.loading === true) {
      return <div>hi i'm loading</div>;
    }
    console.log("check name in render", this.state.breed.name);
    return (
      <div className="Breed">
        <h1>{this.state.breed.name}</h1>
        <p>{this.state.breed.id}</p>
        <p>{this.state.breed.desc}</p>
        <p>{this.state.breed.temp}</p>
      </div>
    );
  }
}
