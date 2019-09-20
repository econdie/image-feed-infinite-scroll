import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Nav from "./page/nav";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/styles.css";

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <title>{this.props.title}</title>
        </Head>
        <Nav />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired
};

export default Page;
