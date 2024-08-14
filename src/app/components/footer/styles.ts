import styled from "styled-components";
import { Footer as AntFooter } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";

export const AntFooterCustom = styled(AntFooter)`
  background-color: transparent;
  text-align: left;
  padding: 20px 0px;

  @media (min-width: 768px) {
    margin-top: 0px;
    background-color: #060606;
    padding: 20px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 10px 53px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px 33px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  color: #c6c6c6 !important;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    color: #ffffff !important;
  }
`;
