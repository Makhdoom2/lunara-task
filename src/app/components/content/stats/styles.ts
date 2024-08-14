import styled from "styled-components";
import { Button, Flex } from "antd";

export const StatsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  //align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DescriptionText = styled.p`
  font-family: TT Interfaces, sans-serif;
  color: #9b9b9b;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  .highlight {
    color: #ffffff;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusDot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 4px;
`;

export const Container = styled(Flex)`
  flex-direction: column;
  gap: 4px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;
  background: #1f1f1f;
  width: 115px;
  height: 34px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  border: 1px solid #383838;
  img {
    margin-left: 8px;
  }
  &:hover {
    background: #1f1f1f !important;
  }
`;
