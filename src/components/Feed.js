import React from "react";
import Card from "./Card";

export default class Feed extends React.Component {
  state = {
    loading: true,
    error: false,
    cards: [] //[{image:"http", numberOfLikes:0}, {}]
  };

  componentDidMount() {
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
    return fetch(
      "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc"
    )
      .then(res => res.json())
      .then(data => {
        const dataMaped = data.map(imageDetails => {
          return { src: imageDetails.url, id: imageDetails.id, likes: 0 };
        });
        // console.log("articles", this.state.articles);
        console.log("DATAAAAAA", dataMaped);
        this.setState({ cards: dataMaped, loading: false });
        console.log("STATE", this.state.cards);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  likeCard = () => this.setState({ likes: this.state.likes + 1 });

  renderCards = cardsArray => {
    return cardsArray.map(card => {
      return (
        <Card key={card.id} src={card.src} id={card.id} likes={card.likes} />
      );
    });
    // console.log("CAR
  };

  render() {
    if (this.state.loading) {
      return <div>It is loading!!!</div>;
    } else if (this.state.error) {
      return <div>Error!!</div>;
    } else {
      console.log("RENDER", this.renderCards(this.state.cards));
      return <div> {this.renderCards(this.state.cards)}</div>;

      // <div className="card">
      //   <div className="fact-text">{this.props.text}</div>

      //   <img className="image" src={this.props.src} alt="useful" />

      //   {console.log("log inside render", this.state.images)}
      //   {this.renderImages(this.state.images)}
      // </div>
    }
  }
}
