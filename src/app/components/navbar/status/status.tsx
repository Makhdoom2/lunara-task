import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Flex } from "antd";
import CustomText from "../../text/custom-text";
import { ReportButton, SubscribeButton } from "./style";
const StatusDetails = styled.div`
  color: #999;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin-right: 16px;
    color: #fff;
  }
`;

const Status = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [nextUpdate, setNextUpdate] = useState(
    new Date(Date.now() + 70 * 1000)
  ); // 1.1 min from now
  const [timeRemaining, setTimeRemaining] = useState(70); // 1.1 min

  const formatDate = (date: Date) => {
    return `${date.getDate()}${date.toLocaleDateString("en-US", {
      month: "long",
    })}, ${date.getFullYear()}`;
  };

  const formatTime = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextUpdateTime: number = nextUpdate.getTime();
      const nowTime: number = now.getTime();
      const timeDiff: number = Math.max(nextUpdateTime - nowTime, 0);

      if (timeDiff <= 0) {
        // update last update time and reset next update time
        setLastUpdate(new Date());
        const newNextUpdate = new Date(now.getTime() + 70 * 1000); // 1.1 min from now
        setNextUpdate(newNextUpdate);
        setTimeRemaining(70);
      } else {
        setTimeRemaining(Math.ceil(timeDiff / 1000));
      }
    }, 1000); // after every second

    return () => clearInterval(interval);
  }, [nextUpdate]);

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <StatusDetails>
        <CustomText
          text={formatDate(new Date())}
          lineHeight="18px"
          weight={500}
          size="12px"
          color="#E6E6E6"
        />

        <Flex
          style={{ flexDirection: "row", gap: "8px", alignItems: "center" }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#9B9B9B",
              borderRadius: "50%",
            }}
          />

          <span
            style={{
              fontFamily: `TT Interfaces, sans-serif`,
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#9B9B9B",
            }}
          >
            Last update{" "}
            <span style={{ color: "#E6E6E6" }}>{formatTime(lastUpdate)}</span>
          </span>
        </Flex>

        <Flex
          style={{ flexDirection: "row", gap: "8px", alignItems: "center" }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#9B9B9B",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontFamily: `TT Interfaces, sans-serif`,
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#9B9B9B",
              width: "132px",
            }}
          >
            Next update{" "}
            {timeRemaining > 60
              ? `${Math.floor(timeRemaining / 60)} min`
              : `${timeRemaining} sec`}{" "}
            later
          </span>
        </Flex>
      </StatusDetails>
      <SubscribeButton>
        <CustomText
          text={"Subscribe to update"}
          lineHeight="21px"
          weight={500}
          size="14px"
          color="#FFFFFF"
        />
        <img src={"/chevron-down.svg"} alt="Logo" />
      </SubscribeButton>
      <ReportButton>
        <CustomText
          text={"Report"}
          lineHeight="21px"
          weight={500}
          size="14px"
          color="#FFFFFF"
        />
      </ReportButton>
    </div>
  );
};

export default Status;
