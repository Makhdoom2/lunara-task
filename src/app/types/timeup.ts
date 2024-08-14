export interface UptimeData {
  status: string;
  timestamp: string;
  color: string;
}

export interface ApiUpTimeItem {
  apiName: string;
  percentage: string;
  uptime: UptimeData[];
}

export interface ApiUpTimeResponse {
  apiUpTime: ApiUpTimeItem[];
}
