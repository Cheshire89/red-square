import { RecordModel } from "pocketbase";

export interface MenuItem extends RecordModel {
  name: string;
  desc: string;
  price: number;
}

export interface VodkaItem extends RecordModel {
  name: string;
  country: string;
  price_shot: string;
  price_carafe: string;
}

export interface WineItem extends RecordModel {
  name: string;
  country: string;
  price_glass: number;
  price_bottle: number;
}
