import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Thumbnail from "./components/Thumbnails";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main id="wraper">
        <section id="navbar">
          <Thumbnail
            src="./images/photo1.jpeg"
            text="A random text"
          ></Thumbnail>
        </section>
        <section id="feed">
          <Card src="./images/photo1.jpeg" text="A random text"></Card>
        </section>
      </main>
    </div>
  );
}

export default App;
