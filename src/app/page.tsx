"use client";
import NavBar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import styled from "styled-components";

const FooterContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
export default function Home() {
  return (
    <>
      <NavBar />
      <Content />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
