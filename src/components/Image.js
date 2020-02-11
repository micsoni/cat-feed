import React from "react";

export default class Image extends React.Component {
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
        this.state.error = true;
        console.log(error);
      });
  }

  renderImages(array) {
    const imageUrl = array.map(image => {
      return (
        <div>
          <img src={image.url} />
        </div>
      );
    });
    console.log("imageUrl: ", imageUrl);
    return imageUrl;
  }
  render() {
    return <img className="image" src={this.props.src} alt="useful" />;
  }
}
