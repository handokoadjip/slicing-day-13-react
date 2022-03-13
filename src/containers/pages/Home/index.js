import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Nav,
  SectionHeader,
  SectionContent1,
  SectionContent2,
  SectionTestimoni,
  SectionFooter,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Delightful | Lombok";
  }

  render() {
    return (
      <>
        <Header>
          <Nav />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent1 />
          <SectionContent2 />
          <SectionTestimoni />
        </Main>
        <SectionFooter />
        <Footer />
      </>
    );
  }
}

export default index;
