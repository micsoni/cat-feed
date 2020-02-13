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

  renderCards = cardsArray => {
    // Sorting the cardsArray before mapping over it.
    // copying the array of cards because .sort mutates the original array.
    const copiedCards = [...cardsArray];
    const sortedCardsByLikes = copiedCards.sort((a, b) => b.likes - a.likes);
    console.log("sortedCards", sortedCardsByLikes);

    return sortedCardsByLikes.map(card => {
      return (
        <Card
          key={card.id}
          src={card.src}
          id={card.id}
          likes={card.likes}
          incrementLike={() => this.addLike(card.id)}
        />
      );
    });
  };

  render() {
    return this.state.loading ? (
      <div>Loading!</div>
    ) : (
      <div> {this.renderCards(this.state.cards)}</div>
    );
  }
}
