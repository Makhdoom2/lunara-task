import React from "react";
import { Divider, Flex, Image } from "antd";
import { Container, Header, StatusBar, Status, Footer } from "./styles";
import CustomText from "@/app/components/text/custom-text";
import { ApiUpTimeItem, UptimeData } from "@/app/types/timeup";

const CustomStatusBar: React.FC<ApiUpTimeItem> = ({
  apiName,
  percentage,
  uptime,
}) => {
  return (
    <Container>
      <Header>
        <Flex style={{ gap: "4px", alignItems: "center" }}>
          <CustomText
            text={apiName}
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
        {uptime?.map((item: UptimeData, index: number) => (
          <Status key={index} color={item?.color} />
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
            text={`${percentage} % uptime`}
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
