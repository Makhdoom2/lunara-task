import React from "react";
import { Select } from "antd";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  width: 240px;
  height: 38px;

  .ant-select-selector {
    background: #1f1f1f !important;
    border: 1px solid #383838 !important;
    height: 100% !important;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .ant-select-arrow {
    color: #ffffff;
  }

  .ant-select-dropdown {
    background: #2c2c2c;
    border-radius: 8px;
  }

  .ant-select-item-option {
    &:hover {
      background-color: #383838 !important;
    }
  }
`;

const OptionLabel = styled.span`
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const OptionCircle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #61d47a;
  margin-right: 8px;
`;

const CustomDropDown = () => {
  const onChange = (value: unknown) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <StyledSelect
        placeholder="All Products"
        optionFilterProp="label"
        defaultValue={"all"}
        onChange={onChange}
        defaultActiveFirstOption={true}
        dropdownStyle={{ backgroundColor: "#2c2c2c", borderRadius: "8px" }}
        options={[
          {
            value: "all",
            label: (
              <OptionLabel>
                <OptionCircle />
                All Products
              </OptionLabel>
            ),
          },
          {
            value: "odd",
            label: (
              <OptionLabel>
                <OptionCircle />
                Odd Products
              </OptionLabel>
            ),
          },
          {
            value: "even",
            label: (
              <OptionLabel>
                <OptionCircle />
                Even Products
              </OptionLabel>
            ),
          },
        ]}
        popupClassName="custom-dropdown"
      />
    </div>
  );
};

export default CustomDropDown;
