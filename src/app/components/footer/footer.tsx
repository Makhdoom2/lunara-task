import React from "react";
import CustomText from "../text/custom-text";
import {
  AntFooterCustom,
  Container,
  TextWrapper,
  SocialLinks,
  StyledLink,
} from "./styles";

const Footer = () => {
  return (
    <AntFooterCustom>
      <Container>
        <TextWrapper>
          <CustomText
            text={`© ${new Date().getFullYear()} Nod Financials, Inc. All rights reserved.`}
            lineHeight="18px"
            weight={400}
            size="12px"
            color="#C6C6C6"
          />
          <StyledLink
            href="https://www.lunara.pk/legal/terms-and-conditions"
            target="_blank"
          >
            Terms of Services
          </StyledLink>

          <StyledLink
            href="https://www.lunara.pk/legal/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </StyledLink>
        </TextWrapper>

        <SocialLinks>
          <StyledLink href="https://twitter.com/lunarabank" target="_blank">
            Twitter
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/company/lunaraverse/"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
          <StyledLink
            href="https://www.facebook.com/profile.php?id=100093036426459&mibextid=ZbWKwL"
            target="_blank"
          >
            Facebook
          </StyledLink>
        </SocialLinks>
      </Container>
    </AntFooterCustom>
  );
};

export default Footer;
