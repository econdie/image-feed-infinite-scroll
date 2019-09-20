import React, { Component } from "react";
import Page from "../components/page";
import Feed from "../components/feed";

class Home extends Component {
  render() {
    return (
      <Page title={"Home"}>
        <div className="hero">
          <h1 className="title">Infinite Scroll Image Feed</h1>
        </div>
        <Feed />
      </Page>
    );
  }
}

export default Home;
