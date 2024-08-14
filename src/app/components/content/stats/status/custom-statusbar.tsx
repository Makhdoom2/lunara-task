import React from "react";
import { Divider, Flex, Image } from "antd";
import { Container, Header, StatusBar, Status, Footer } from "./styles";
import CustomText from "@/app/components/text/custom-text";

interface TimelineStatusBarProps {
  title: string;
}

const statuses = [
  "Operational",
  "Degraded performance",
  "Partial outage",
  "Major Outage",
  "Maintenance",
];

const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    Operational: "#61D47A",
    "Degraded performance": "#FFC47F",
    "Partial outage": "#D5FF7B",
    "Major Outage": "#FA3E3E",
    Maintenance: "#7ED1FF",
  };

  return statusColors[status] || "#61D47A";
};

const generateRandomStatus = (): string => {
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const CustomStatusBar: React.FC<TimelineStatusBarProps> = ({ title }) => {
  const timelineStatuses = Array(90).fill("Operational");

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * 90);
    timelineStatuses[randomIndex] = generateRandomStatus();
  }

  const operationalCount = timelineStatuses.filter(
    (status) => status === "Operational"
  ).length;
  const operationalPercentage = ((operationalCount / 90) * 100).toFixed(1);

  return (
    <Container>
      <Header>
        <Flex style={{ gap: "4px", alignItems: "center" }}>
          <CustomText
            text={title}
            lineHeight="24px"
            weight={500}
            size="16px"
            color="#FFFFFF"
          />

          <Image src={"/arrow-right.svg"} preview={false} />
        </Flex>

        <CustomText
          text={"Operational"}
          lineHeight="21px"
          weight={500}
          size="14px"
          color="#61D47A"
        />
      </Header>

      <StatusBar>
        {timelineStatuses.map((status, index) => (
          <Status key={index} color={getStatusColor(status)} />
        ))}
      </StatusBar>

      <Footer>
        <CustomText
          text={"90 days ago"}
          lineHeight="18px"
          weight={400}
          size="12px"
          color="#9B9B9B"
        />
        <Divider
          style={{
            borderColor: "#9B9B9B",
          }}
        >
          <CustomText
            text={`${operationalPercentage} % uptime`}
            lineHeight="18px"
            weight={400}
            size="12px"
            color="#9B9B9B"
          />
        </Divider>
        <CustomText
          text={`Today`}
          lineHeight="18px"
          weight={400}
          size="12px"
          color="#9B9B9B"
        />
      </Footer>
    </Container>
  );
};

export default CustomStatusBar;
