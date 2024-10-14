import { RecordModel } from "pocketbase";

export interface MenuItem extends RecordModel {
  name: string;
  desc: string;
  price: number;
}

export interface VodkaItem {
  vodkaTitle: string;
  priceShot: string;
  priceCarafe: string;
}

export interface WineItem extends RecordModel {
  name: string;
  country: string;
  price_glass: number;
  price_bottle: number;
}
