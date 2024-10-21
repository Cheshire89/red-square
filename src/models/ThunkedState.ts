export interface ThunkedState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}
