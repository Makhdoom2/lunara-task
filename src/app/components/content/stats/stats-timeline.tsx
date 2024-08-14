import React from "react";
import CustomStatusBar from "./status/custom-statusbar";
import CustomText from "../../text/custom-text";
import { ButtonStyled, Container } from "./styles";

const StatsTimeline = () => {
  const statusBarTitles = [
    "Sandbox",
    "Money movement: card authorization",
    "Production",
    "Dashboard",
  ];

  return (
    <Container>
      {statusBarTitles.map((title, index) => (
        <CustomStatusBar key={index} title={title} />
      ))}

      <ButtonStyled>
        <CustomText
          text={"View more"}
          lineHeight="21px"
          weight={500}
          size="14px"
          color="#FFFFFF"
        />
        <img src={"/chevron-down.svg"} alt="Logo" />
      </ButtonStyled>
    </Container>
  );
};

export default StatsTimeline;
