import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import ndjsonStream from "can-ndjson-stream";
import ImageGrid from "./common/imagegrid";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      streaming: false,
      images: [],
      moreItems: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //data is already streaming - return from function
    if (this.state.streaming) {
      return false;
    }

    this.setState({ streaming: true });

    //before loading, store the current number of items. after api streaming is done, compare new length.
    //if length doesn't change assume there's no more items to fetch
    const numImages = this.state.images.length;

    //fetch the data for the next page
    fetch(`http://localhost:3001/feed?page=${this.state.page}`)
      .then(response => ndjsonStream(response.body))
      .then(stream => {
        const reader = stream.getReader();

        const readStream = () => {
          reader.read().then(({ done, value }) => {
            if (done) {
              //when stream is done, increase page number for the next future api call. reset the streaming flag, and check if number of images actually increased
              this.setState({
                page: this.state.page + 1,
                streaming: false,
                moreItems: this.state.images.length !== numImages
              });
            } else {
              this.setState({ images: [...this.state.images, value] });
              readStream();
            }
          });
        };

        readStream();
      });
  };

  render() {
    const { images, moreItems, streaming } = this.state;

    return (
      <React.Fragment>
        {images.length > 0 ? (
          <ImageGrid
            images={images}
            onThreshold={this.getData}
            moreItems={moreItems}
            streaming={streaming}
          />
        ) : (
          <p className="text-center">Failed to load feed.</p>
        )}
      </React.Fragment>
    );
  }
}

export default Feed;
