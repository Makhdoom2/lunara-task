export interface Incident {
  type: string;
  details: string;
  timestamp: string;
}

export interface DayData {
  timestamp: string;
  error: string | null;
  incidents: Incident[];
}

export interface IncidentData {
  days: DayData[];
}
