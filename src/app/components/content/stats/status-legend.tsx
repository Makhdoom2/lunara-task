import React from "react";
import CustomText from "../../text/custom-text";
import { LegendContainer, StatusItem, StatusDot } from "./styles";

const StatusLegend = () => {
  const statusesLegend = [
    { label: "Operational", color: "#61D47A" },
    { label: "Degraded performance", color: "#FFC47F" },
    { label: "Partial outage", color: "#D5FF7B" },
    { label: "Major Outage", color: "#FA3E3E" },
    { label: "Maintenance", color: "#7ED1FF" },
  ];

  return (
    <LegendContainer>
      {statusesLegend.map((status, index) => (
        <StatusItem key={index}>
          <StatusDot color={status.color} />
          <CustomText
            text={status.label}
            lineHeight="18px"
            weight={400}
            size="12px"
            color="#FFFFFF"
          />
        </StatusItem>
      ))}
    </LegendContainer>
  );
};

export default StatusLegend;
