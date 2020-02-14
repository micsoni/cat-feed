import React from "react";
import Card from "./Card";

export default class Feed extends React.Component {
  state = {
    loading: true,
    error: false,
    cards: []
  };

  componentDidMount() {
    const fetchCustom = breed => {
      fetch(
        // "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc"
        // "https://api.thecatapi.com/v1/breeds?attach_breed=beng&limit=5"
        `https://api.thecatapi.com/v1/images/search?breed_id=${breed}&limit=5`
        // "https://api.thecatapi.com/v1/breeds"
      )
        .then(res => res.json())
        .then(data => {
          console.log(" i am here!");

          const dataMaped = data.map(imageDetails => {
            return { src: imageDetails.url, id: imageDetails.id, likes: 0 };
          });
          this.setState({ cards: dataMaped, loading: false });
        })
        .catch(error => {
          this.setState({ error: true });
          console.log(error);
        });
    };
    return fetchCustom("beng");
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
