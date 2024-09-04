declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
      REACT_APP_APPLICATION_NAME: string;
      REACT_APP_MAP_KEY: string;
    }
  }
}

export {};
