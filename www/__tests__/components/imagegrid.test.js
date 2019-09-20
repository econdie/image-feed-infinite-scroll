import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import ImageGrid from "../../components/common/imagegrid";
import { Card, CardImg, CardText, CardDeck, CardBody, Alert } from "reactstrap";

const images = [
  {
    imageUrl: "https://picsum.photos/id/80/200",
    caption: "Exercitationem eum impedit et et quam debitis."
  },
  {
    imageUrl: "https://picsum.photos/id/81/200",
    caption: "Id autem rerum et."
  },
  {
    imageUrl: "https://picsum.photos/id/82/200",
    caption:
      "Id doloribus ipsam eum aliquam excepturi repellendus eum officiis odio."
  }
];

describe("ImageGrid", () => {
  it("renders expected number of components", () => {
    const grid = shallow(<ImageGrid images={images} />);
    expect(grid.find(CardDeck)).toHaveLength(1);
    expect(grid.find(Card)).toHaveLength(3);
    expect(grid.find(CardImg)).toHaveLength(3);
    expect(grid.find(CardText)).toHaveLength(3);
    expect(grid.find(Alert).find("#finishedLoading")).toHaveLength(0);
    expect(
      grid.find(CardImg).find({ src: "https://picsum.photos/id/80/200" })
    ).toHaveLength(1);
  });

  it("renders no more images message", () => {
    const grid = shallow(<ImageGrid images={images} moreItems={false} />);
    expect(grid.find(Alert).find("#finishedLoading")).toHaveLength(1);
  });

  it("Snapshot matches", () => {
    const component = renderer.create(<ImageGrid images={images} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
