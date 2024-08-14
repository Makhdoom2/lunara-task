import { Flex } from "antd";
import React from "react";
import CustomText from "../../text/custom-text";

interface StatementProps {
  date: string;
  status: string;
  detail: string;
}

const Statement: React.FC<StatementProps> = ({ date, status, detail }) => {
  const getStatusColor = (status: string): string => {
    const statusColors: Record<string, string> = {
      Resolved: "#7ED1FF",
      Monitoring: "#DE7FFF",
    };

    return statusColors[status];
  };
  return (
    <Flex
      style={{ flexDirection: "column", maxWidth: "861px", marginTop: "12px" }}
    >
      <CustomText
        text={date}
        lineHeight="18px"
        weight={400}
        size="12px"
        color="#9B9B9B"
      />

      <Flex>
        <p
          style={{
            fontFamily: "TT Interfaces, sans-serif",
            color: getStatusColor(status),
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "18px",
          }}
        >
          {status} -{" "}
          <span
            style={{
              color: "#9B9B9B",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "18px",
            }}
          >
            {" "}
            {detail}
          </span>
        </p>
      </Flex>
    </Flex>
  );
};

export default Statement;
