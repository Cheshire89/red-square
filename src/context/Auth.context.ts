import { createContext, useContext } from "react";
import PocketBase from "pocketbase";

interface AuthContextModel {
  token: null | string;
}

export const AuthContext = createContext<AuthContextModel>({
  token: null,
});

export function useAuthContext(): [AuthContextModel, PocketBase] {
  const auth = useContext(AuthContext);

  const pb = new PocketBase(process.env.REACT_APP_API_URL_ALT);
  //   const { REACT_APP_API_USERNAME, REACT_APP_API_PASS, REACT_APP_API_URL_ALT } =
  //     process.env;

  if (auth.token === null) {
    const { REACT_APP_API_USERNAME, REACT_APP_API_PASS } = process.env;
    pb.collection("users")
      .authWithPassword(REACT_APP_API_USERNAME, REACT_APP_API_PASS)
      .then((res) => (auth.token = res.token));
  }

  return [auth, pb];
}
