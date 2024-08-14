import React from "react";
import CustomDropDown from "./dropdown";
import { StatsHeaderContainer, DescriptionText } from "./styles";

const StatsHeader = () => {
  return (
    <StatsHeaderContainer>
      <CustomDropDown />
      <DescriptionText>
        Uptime over the past 90 days.
        <span className="highlight">View historical uptime.</span>
      </DescriptionText>
    </StatsHeaderContainer>
  );
};

export default StatsHeader;
