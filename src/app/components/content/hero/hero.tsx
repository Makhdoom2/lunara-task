import React from "react";
import { BannerWrapper, Heading, IllustrationWrapper } from "./styles";

const Hero = () => {
  return (
    <BannerWrapper>
      <IllustrationWrapper>
        <img src="/background-pattern-decorative.svg" />
        <img src="/featured-icon.svg" />
      </IllustrationWrapper>
      <Heading>All Systems Operational</Heading>
    </BannerWrapper>
  );
};

export default Hero;
