import React from "react";
import StatusLegend from "./status-legend";
import StatsHeader from "./stats-header";
import StatsTimeline from "./stats-timeline";

const Stats = () => {
  return (
    <div>
      <StatsHeader />
      <StatusLegend />
      <StatsTimeline />
    </div>
  );
};

export default Stats;
