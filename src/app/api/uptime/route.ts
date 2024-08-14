const statuses = [
  "Operational",
  "Degraded performance",
  "Partial outage",
  "Major Outage",
  "Maintenance",
];

const statusColors: { [key: string]: string } = {
  Operational: "#61D47A",
  "Degraded performance": "#FFC47F",
  "Partial outage": "#D5FF7B",
  "Major Outage": "#FA3E3E",
  Maintenance: "#7ED1FF",
};

const generateRandomStatus = (): string => {
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const calculateOperationalPercentage = (timelineStatuses: string[]): string => {
  const operationalCount = timelineStatuses.filter(
    (status) => status === "Operational"
  ).length;
  return ((operationalCount / 90) * 100).toFixed(1);
};

const generateUptimeData = (apiName: string) => {
  const timelineStatuses = Array(90).fill("Operational");

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * 90);
    timelineStatuses[randomIndex] = generateRandomStatus();
  }

  const operationalPercentage =
    calculateOperationalPercentage(timelineStatuses);

  const uptime = timelineStatuses.map((status, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (90 - index));

    return {
      status,
      timestamp: date.toISOString(),
      color: statusColors[status],
    };
  });

  return {
    apiName,
    percentage: operationalPercentage,
    uptime,
  };
};

import { NextResponse } from "next/server";

export async function GET() {
  const apiUpTime = [
    generateUptimeData("Sandbox"),
    generateUptimeData("Money movement: card authorization"),
    generateUptimeData("Production"),
    generateUptimeData("Dashboard"),
  ];

  return NextResponse.json({ apiUpTime });
}
