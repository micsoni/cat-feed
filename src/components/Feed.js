import React from "react";
import Card from "./Card";

export default class Feed extends React.Component {
  state = {
    loading: true,
    error: false,
    images: []
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
        // console.log("articles", this.state.articles);
        console.log(data);
        this.setState({});
        this.setState({ images: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  renderCards(array) {
    const imageUrl = array.map(image => (
      <Card key={image.id} src={image.url} />
    ));
    console.log("imageUrl: ", imageUrl);
    return imageUrl;
  }

  render() {
    if (this.state.loading) {
      return <div>{/* TODO */}It is loading!!!</div>;
    } else if (this.state.error) {
      return <div>{/* TODO */}Error!!</div>;
    } else {
      return <div> {this.renderCards(this.state.images)}</div>;

      // <div className="card">
      //   <div className="fact-text">{this.props.text}</div>

      //   <img className="image" src={this.props.src} alt="useful" />

      //   {console.log("log inside render", this.state.images)}
      //   {this.renderImages(this.state.images)}
      // </div>
    }
  }
}
