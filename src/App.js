import React from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnails";
import Feed from "./components/Feed";
import { Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = {
    breeds: [] // [bengal, hima]
  };

  componentDidMount() {
    return fetch("https://api.thecatapi.com/v1/breeds")
      .then(res => res.json())
      .then(data => {
        const breeds = data.map(breed => breed.name);
        console.log("breeds:", breeds);
        this.setState({ breeds: breeds });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <main id="wraper">
          <section id="navbar">
            <Link to="/bengal">
              <Thumbnail src="./images/photo1.jpeg" text="Bengal"></Thumbnail>
            </Link>
            <Link to="/bengal">
              <Thumbnail src="./images/photo1.jpeg" text="Bengal"></Thumbnail>
            </Link>
          </section>
          <section id="feed">
            <Route exact path="/" component={Feed} />
          </section>
        </main>
      </div>
    );
  }
}
