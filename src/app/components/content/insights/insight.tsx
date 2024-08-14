import React from "react";
import { Flex } from "antd";
import InsightDetail from "./insight-detail";
import { ButtonContainer, StyledRangePicker, CustomSegmented } from "./styles";
import { useGetIncidents } from "@/app/utils/use-get-incident";
import { DayData } from "@/app/types/incident";
import { format } from "date-fns";

const Insight = () => {
  const { data, error, isLoading } = useGetIncidents();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading incidents: {error.message}</div>;

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
        {data?.days.map((data: DayData, index: number) => (
          <InsightDetail
            key={index}
            timestamp={format(
              new Date(data.timestamp).toLocaleDateString(),
              "MMM dd, yyyy"
            )}
            error={data.error}
            incidents={data.incidents}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Insight;
