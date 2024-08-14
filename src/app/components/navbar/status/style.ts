import styled from "styled-components";
import { Button, Flex } from "antd";

export const StatusContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const StatusDetails = styled.div`
  color: #999;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  span {
    margin-right: 16px;
    color: #fff;

    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const FlexWrapper = styled(Flex)`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: #9b9b9b;
  border-radius: 50%;
`;

export const SubscribeButton = styled(Button)`
  margin-right: 8px;
  background: #0046ff;
  border: 1px solid #0046ff;
  width: 176px;
  height: 34px;
  &:hover {
    background: #0046ff !important;
  }
`;

export const ReportButton = styled(Button)`
  background: #1f1f1f;
  border: 1px solid #383838;
  width: 68px;
  height: 34px;

  &:hover {
    background: #1f1f1f !important;
  }
`;
