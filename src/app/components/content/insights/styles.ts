import styled from "styled-components";

import { Segmented, DatePicker } from "antd";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 35px;

  @media screen and (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 79px;
  }
`;

export const CustomSegmented = styled(Segmented)`
  background: #1f1f1f;
  border: 1px solid #383838;
  width: 298px;
  height: 44px;
  display: flex;
  align-items: center;

  .ant-segmented-item-selected {
    height: 36px;
    width: 50%;
    background-color: #e5edff !important;
    color: #0046ff !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-segmented-item {
    height: 36px;
    width: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #0046ff !important;
    }
  }
`;

export const StyledRangePicker = styled(DatePicker.RangePicker)`
  width: 298px;
  height: 44px !important;
  background: #1f1f1f !important;
  color: #ffff !important;
  border-radius: 8px !important;
  border: 1px solid #383838 !important;

  .ant-picker-input > input {
    color: #ffff !important;
  }

  .ant-picker-suffix,
  .ant-picker-clear {
    color: #ffff !important;
  }

  .ant-picker-panel-container {
    background: #1f1f1f !important;
    color: #ffff !important;
  }

  .ant-picker-cell-inner {
    color: #ffff !important;
  }

  .ant-picker-cell-inner:hover,
  .ant-picker-cell-inner-selected {
    background-color: #383838 !important;
  }
  .ant-picker-input > input::placeholder {
    color: #ffff !important;
    opacity: 1; /* Ensure full opacity */
  }
`;
