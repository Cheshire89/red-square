export interface MenuState {
  page: string;
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}
