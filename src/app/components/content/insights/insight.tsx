import React from "react";
import { Flex } from "antd";
import InsightDetail from "./insight-detail";
import { ButtonContainer, StyledRangePicker, CustomSegmented } from "./styles";

const sampleErrorStatements27 = [
  {
    date: "Mar 27, 00:56 UTC",
    status: "Resolved",
    detail: "This incident has been resolved.",
  },
  {
    date: "Mar 27, 00:53 UTC",
    status: "Monitoring",
    detail:
      "This issue has been mitigated. We are closely monitoring our systems as we recover.",
  },
];

const sampleErrorStatements25 = [
  {
    date: "Mar 25, 00:56 UTC",
    status: "Resolved",
    detail: "This incident has been resolved.",
  },
  {
    date: "Mar 25, 00:53 UTC",
    status: "Monitoring",
    detail:
      "This issue has been mitigated. We are closely monitoring our systems as we recover.",
  },
];

const sampleData = [
  {
    date: "Mar 29, 2024",
    error: null,
    errorStatements: [],
  },
  {
    date: "Mar 28, 2024",
    error: "Elevated /transactions/get and /transactions/recurring/get errors",
    errorStatements: [],
  },
  {
    date: "Mar 27, 2024",
    error: "Minor connectivity issues",
    errorStatements: sampleErrorStatements27,
  },
  {
    date: "Mar 26, 2024",
    error: null,
    errorStatements: [],
  },
  {
    date: "Mar 25, 2024",
    error: "Elevated /transactions/get and /transactions/recurring/get errors",
    errorStatements: sampleErrorStatements25,
  },
  {
    date: "Mar 24, 2024",
    error: null,
    errorStatements: [],
  },
];

const Insight = () => {
  return (
    <Flex style={{ flexDirection: "column" }}>
      <ButtonContainer>
        <CustomSegmented
          options={[
            { label: "Past incident", value: "Past incident" },
            { label: "Uptime", value: "Uptime" },
          ]}
        />

        <StyledRangePicker />
      </ButtonContainer>

      <Flex style={{ marginTop: "44px", flexDirection: "column", gap: "32px" }}>
        {sampleData.map((data, index) => (
          <InsightDetail
            key={index}
            date={data.date}
            error={data.error}
            errorStatements={data.errorStatements}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Insight;
