import { useQuery } from "@tanstack/react-query";
import { IncidentData } from "../types/incident";

export const useGetIncidents = () =>
  useQuery<IncidentData, Error>({
    queryKey: ["incidents"],
    queryFn: async () => {
      const response = await fetch("/api/incident");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (!data.days || data.days.length === 0) {
        throw new Error("No incident data available");
      }

      return data;
    },
  });
