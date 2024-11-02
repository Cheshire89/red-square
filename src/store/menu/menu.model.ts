import { ThunkedState } from "@models/ThunkedState";

export interface MenuState extends ThunkedState {
  page: string;
  data: {
    [key: string]: any[];
  };
  order: string[];
}
