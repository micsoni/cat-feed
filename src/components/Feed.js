import React from "react";
import Card from "./Card";

export default class Feed extends React.Component {
  state = {
    loading: true,
    error: false,
    cards: [] // [{ id: "1", src:"http", likes:0}]
  };

  componentDidMount() {
    return fetch(
      "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc"
    )
      .then(res => res.json())
      .then(data => {
        const dataMaped = data.map(imageDetails => {
          return { src: imageDetails.url, id: imageDetails.id, likes: 0 };
        });
        this.setState({ cards: dataMaped, loading: false });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  addLike = id => {
    // get the id from current card
    // check if id from current card is the right one
    // inside a map
    const updatedCards = this.state.cards.map(currCard => {
      if (currCard.id === id) {
        console.log("currCard id:", currCard.id);

        return { ...currCard, likes: currCard.likes + 1 };
      } else {
        return currCard;
      }
    });

    this.setState({ cards: updatedCards });
  };
  // this.setState({ likes: this.state.likes + 1 });

  renderCards = cardsArray => {
    return cardsArray.map(card => {
      return (
        <Card
          key={card.id}
          src={card.src}
          id={card.id}
          likes={card.likes}
          incrementLikes={this.addLike}
        />
      );
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading!</div>;
    } else if (this.state.error) {
      return <div>Error!</div>;
    } else {
      return <div> {this.renderCards(this.state.cards)}</div>;
    }
  }
}
