import { Divider, Flex } from "antd";
import React from "react";
import Statement from "./statement";
import CustomText from "../../text/custom-text";
import { DayData, Incident } from "@/app/types/incident";
import { format } from "date-fns";

const InsightDetail: React.FC<DayData> = ({ timestamp, error, incidents }) => {
  return (
    <Flex style={{ flexDirection: "column", maxWidth: "861px" }}>
      <CustomText
        text={timestamp}
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

      {incidents &&
        incidents.map((statement: Incident, index: number) => (
          <Statement
            key={index}
            date={format(
              new Date(statement.timestamp).toLocaleDateString(),
              "MMM dd, HH:mm 'UTC'"
            )}
            status={statement.type}
            detail={statement.details}
          />
        ))}
    </Flex>
  );
};

export default InsightDetail;
