"use client";
import NavBar from "./components/navbar/navbar";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const FooterContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const queryClient = new QueryClient();
export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Content />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </QueryClientProvider>
    </>
  );
}
