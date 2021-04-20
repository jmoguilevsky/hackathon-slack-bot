/* eslint-disable camelcase */
export interface RunHistoryRecord {
  id: string;
  start_date_time: string;
  end_date_time: string;
  status: "FAILED" | string;
  execution_detail: string;
}
