import React from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnails";
import Feed from "./components/Feed";
import BreedPage from "./components/BreedPage";
import { Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = {
    breeds: [] // [bengal, hima]
  };

  componentDidMount() {
    return fetch("https://api.thecatapi.com/v1/breeds")
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

        this.setState({ breeds: breeds });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  generateLinks = array => {
    const links = array.map(breed => {
      return (
        <Link key={breed.id} to={`/breed/${breed.id}`}>
          <Thumbnail name={breed.name}></Thumbnail>
        </Link>
      );
    });
    return links;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <main id="wraper">
          <section id="navbar">
            <div> {this.generateLinks(this.state.breeds)}</div>
          </section>
          <section id="feed">
            <Route exact path="/" component={Feed} />
            <Route path="/breed/:breed" component={BreedPage} />
            {/* <div> {this.generateBreedPages(this.state.breeds)}</div> */}
          </section>
        </main>
      </div>
    );
  }
}

// "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc"
// "https://api.thecatapi.com/v1/breeds?attach_breed=beng&limit=5"
//  `https://api.thecatapi.com/v1/images/search?breed_id=${breed}&limit=5`
// "https://api.thecatapi.com/v1/breeds"
