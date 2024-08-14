import React from "react";
import CustomStatusBar from "./status/custom-statusbar";
import CustomText from "../../text/custom-text";
import { ButtonStyled, Container } from "./styles";
import { useGetApiUpTime } from "@/app/utils/use-get-uptime";
import { ApiUpTimeItem } from "@/app/types/timeup";

const StatsTimeline = () => {
  const { data, error, isLoading } = useGetApiUpTime();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Uptime: {error.message}</div>;

  return (
    <Container>
      {data?.apiUpTime.map((item: ApiUpTimeItem, index: number) => (
        <CustomStatusBar
          key={index}
          apiName={item.apiName}
          percentage={item.percentage}
          uptime={item.uptime}
        />
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
