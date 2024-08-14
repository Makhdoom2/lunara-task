import { useQuery } from "@tanstack/react-query";
import { ApiUpTimeResponse } from "../types/timeup";

export const useGetApiUpTime = () =>
  useQuery<ApiUpTimeResponse, Error>({
    queryKey: ["apiUpTime"],
    queryFn: async () => {
      const response = await fetch("/api/uptime");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (!data.apiUpTime || data.apiUpTime.length === 0) {
        throw new Error("No API uptime data available");
      }

      return data;
    },
  });
