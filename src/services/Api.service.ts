import { NavigationLink } from "@models/NavigationLink.model";
import { UiState } from "@uiStore/ui.model";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  id: string;
  data: T;
}

class Api {
  private API_URL: string;
  private APP_NAME: string;

  constructor() {
    const { REACT_APP_API_URL, REACT_APP_APPLICATION_NAME } = process.env;
    this.API_URL = REACT_APP_API_URL;
    this.APP_NAME = REACT_APP_APPLICATION_NAME;
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

  getProfile(): Promise<AxiosResponse<ApiResponse<UiState>>> {
    const url = this.createUrl("profile");
    return axios.get(url);
  }
}

export default new Api();
