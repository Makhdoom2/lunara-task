import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1fr auto;
  max-height: 165px;
  margin-left: -20px;
  @media screen and (min-width: 768px) {
    margin-left: -50px;
  }
`;

export const IllustrationWrapper = styled.div`
  display: grid;
  max-width: 70px;
  padding-block: 48px;
  place-items: center;
  img:first-child {
    width: 200%;
  }

  img:nth-child(2) {
    width: 40%;
  }

  > * {
    grid-column: 1;
    grid-row: 1;
  }

  @media screen and (min-width: 768px) {
    max-width: 150px;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 1.4rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
