import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;
interface CustomTextProps {
  text: string;
  lineHeight?: string;
  weight?: number;
  size?: string;
  color?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  lineHeight = "21px",
  weight = 400,
  size = "14px",
  color = "#E6E6E6",
}) => {
  const StyledText = styled(Text)`
    font-family: "TT Interfaces", sans-serif;
    line-height: ${lineHeight};
    font-weight: ${weight};
    font-size: ${size};
    color: ${color};
  `;

  return <StyledText>{text}</StyledText>;
};

export default CustomText;
