import React from "react";
import "./App.css";
// import Card from "./components/Card";
import Thumbnail from "./components/Thumbnails";
import Feed from "./components/Feed";

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
          <Feed />
          {/* <Card src="./images/photo1.jpeg" text="A random text"></Card> */}
        </section>
      </main>
    </div>
  );
}

export default App;
