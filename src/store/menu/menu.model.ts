import { ThunkedState } from "@models/ThunkedState";

export interface MenuState extends ThunkedState {
  page: string;
  data: any[];
}
