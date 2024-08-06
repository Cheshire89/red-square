export interface UiTheme {
  primary: string;
  secondary: string;
  dark: string;
  darkBorder: string;
  light: string;
  lightBorder: string;
}

export interface UiState {
  appName: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  hours: {
    kitchen: string;
    bar: string;
  };
  social: {
    [key: string]: string;
  };
}
