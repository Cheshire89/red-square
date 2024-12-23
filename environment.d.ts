declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ID: string;
      REACT_APP_API_URL: string;
      REACT_APP_MAP_KEY: string;
      REACT_APP_API_USERNAME: string;
      REACT_APP_API_PASS: string;
    }
  }
}

export { };
