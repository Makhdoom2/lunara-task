import React from "react";
import { Container, InnerWrapper, ContentWrapper } from "./style";
import Hero from "./hero/hero";
import Stats from "./stats/stats";
import Insight from "./insights/insight";

const Content = () => {
  return (
    <Container>
      <InnerWrapper>
        <ContentWrapper>
          <Hero />
          <Stats />
          <Insight />
        </ContentWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default Content;
