import { NavigationLink } from "@models/NavigationLink.model";
import axios, { AxiosResponse } from "axios";
import PocketBase from "pocketbase";

interface ApiResponse<T> {
  id: string;
  data: T;
}

class Api {
  private API_URL: string;
  private APP_NAME: string;
  private pb: PocketBase;

  constructor() {
    const { REACT_APP_API_URL, REACT_APP_APPLICATION_NAME } = process.env;
    this.API_URL = REACT_APP_API_URL;
    this.APP_NAME = REACT_APP_APPLICATION_NAME;

    this.pb = new PocketBase(process.env.REACT_APP_API_URL_ALT);
    if (!this.pb.authStore.isValid) {
      const { REACT_APP_API_USERNAME, REACT_APP_API_PASS } = process.env;
      this.pb
        .collection("users")
        .authWithPassword(REACT_APP_API_USERNAME, REACT_APP_API_PASS);
    }
  }

  createUrl(apiSection: string) {
    return `${this.API_URL}/${apiSection}/${this.APP_NAME}`;
  }

  getNavigation(): Promise<AxiosResponse<ApiResponse<NavigationLink[]>>> {
    const url = this.createUrl("navigation");
    return axios.get(url);
  }

  getMenu(): Promise<AxiosResponse<ApiResponse<any>>> {
    const url = this.createUrl("menu");
    return axios.get(url);
  }
}

const api = new Api();

export default api;
