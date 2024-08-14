import { Divider, Flex } from "antd";
import React from "react";
import Statement from "./statement";
import CustomText from "../../text/custom-text";

interface ErrorStatement {
  date: string;
  status: string;
  detail: string;
}

interface InsightDetailProps {
  date: string;
  error?: string | null;
  errorStatements?: ErrorStatement[] | null;
}

const InsightDetail: React.FC<InsightDetailProps> = ({
  date,
  error,
  errorStatements,
}) => {
  return (
    <Flex style={{ flexDirection: "column", maxWidth: "861px" }}>
      <CustomText
        text={date}
        lineHeight="24px"
        weight={600}
        size="20px"
        color="#FFFFFF"
      />

      <Divider
        style={{
          borderColor: "#383838",
          marginTop: "12px",
          marginBottom: "12px",
        }}
      />

      {error ? (
        <CustomText
          text={error}
          lineHeight="27px"
          weight={400}
          size="18px"
          color="#FFFFFF"
        />
      ) : (
        <CustomText
          text={"No incidents reported today."}
          lineHeight="21px"
          weight={400}
          size="14px"
          color="#E6E6E6"
        />
      )}

      {errorStatements &&
        errorStatements.map((statement, index) => (
          <Statement
            key={index}
            date={statement.date}
            status={statement.status}
            detail={statement.detail}
          />
        ))}
    </Flex>
  );
};

export default InsightDetail;
