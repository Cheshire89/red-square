export interface ProfileState {
  address: string;
  appName: string;
  city: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  email: string;
  id: string;
  phone: string;
  state: string;
  updated: Date;
  zip: string;
  lat: number;
  lng: number;
  hours: {
    kitchen: string;
    bar: string;
  };
}
