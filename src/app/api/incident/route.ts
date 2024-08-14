import { NextResponse } from "next/server";

const generateRandomTimestamp = (baseDate: Date) => {
  const startOfDay = new Date(baseDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(startOfDay);
  endOfDay.setHours(23, 59, 59, 999);

  const startTime = startOfDay.getTime();
  const endTime = endOfDay.getTime();
  const randomTime = new Date(
    startTime + Math.random() * (endTime - startTime)
  );

  return randomTime.toISOString();
};

const generateRandomIncident = (baseDate: Date) => {
  const types = ["Resolved", "Monitoring"];
  const details = [
    "The issue was resolved after applying a hotfix to the production server.",
    "System is currently under observation to prevent further issues.",
    "Escalated to the support team for immediate investigation.",
  ];
  return {
    type: types[Math.floor(Math.random() * types.length)],
    details: details[Math.floor(Math.random() * details.length)],
    timestamp: generateRandomTimestamp(baseDate),
  };
};

const generateRandomData = () => {
  const days = [];
  const now = new Date();

  for (let i = 0; i < 10; i++) {
    const baseDate = new Date(now.setDate(now.getDate() - i));
    baseDate.setHours(0, 0, 0, 0);

    const timestamp = baseDate.toISOString();
    const hasError = Math.random() > 0.5;
    const errorMessages = [
      "Elevated API response times observed for /transactions endpoint.",
      "Intermittent failures in /user/login API. Further investigation required.",
      "Database connection issues causing delays in data retrieval.",
      "Unexpected downtime during scheduled maintenance window.",
      "Service degraded due to high traffic volume affecting performance.",
    ];
    const error = hasError
      ? errorMessages[Math.floor(Math.random() * errorMessages.length)]
      : null;
    const incidents = hasError ? [generateRandomIncident(baseDate)] : [];

    days.push({
      timestamp,
      error,
      incidents,
    });
  }

  return days;
};

export async function GET() {
  const data = generateRandomData();
  return NextResponse.json({ days: data });
}
