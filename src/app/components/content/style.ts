import styled from "styled-components";
import { Content as AntContent } from "antd/es/layout/layout";

export const Container = styled(AntContent)`
  padding: 0 16px;
  padding-bottom: 40px;
  background-color: #060606;

  @media (min-width: 768px) {
    padding: 0 48px;
    padding-bottom: 110px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 1010px;
  margin-inline: auto;
`;

export const ContentWrapper = styled.div`
  max-width: 861px;
  margin-inline: auto;
`;
