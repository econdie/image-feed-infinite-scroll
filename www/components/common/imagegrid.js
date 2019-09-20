import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardDeck,
  CardBody,
  Col,
  Row,
  Container,
  Spinner,
  Alert
} from "reactstrap";
import InfiniteScroll from "react-infinite-scroller";

class ImageGrid extends Component {
  constructor(props) {
    super(props);
  }

  renderImage = image => {
    return (
      <Card>
        <CardImg top src={image.imageUrl}></CardImg>
        <CardBody>
          <CardText>{image.caption}</CardText>
        </CardBody>
      </Card>
    );
  };

  render() {
    const { images, onThreshold, moreItems, streaming } = this.props;

    return (
      <CardDeck>
        <Container>
          <InfiniteScroll
            pageStart={0}
            threshold={30}
            loadMore={onThreshold}
            hasMore={moreItems}
            loader={
              <div className="text-center my-4" key="loaderkey">
                <Spinner color="primary" /> Loading..
              </div>
            }
          >
            <Row>
              {images.map((image, i) => (
                <Col className="my-2" key={i + 1} sm={12} md={6} lg={4} xl={4}>
                  {this.renderImage(image)}
                </Col>
              ))}
            </Row>
            {!moreItems && !streaming ? (
              <Row>
                <Col className="text-center">
                  <Alert color="info" id="finishedLoading">
                    No more images to display.
                  </Alert>
                </Col>
              </Row>
            ) : null}
          </InfiniteScroll>
        </Container>
      </CardDeck>
    );
  }
}

ImageGrid.defaultProps = {
  streaming: false,
  moreItems: true,
  onThreshold: function() {}
};

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  onThreshold: PropTypes.func,
  streaming: PropTypes.bool,
  moreItems: PropTypes.bool
};

export default ImageGrid;
