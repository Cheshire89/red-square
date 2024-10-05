import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PreHeader from "./PreHeader/PreHeader";

import { setUI } from "@uiStore/ui.slice";
import { UiTheme } from "@uiStore/ui.model";

import api from "../services/Api.service";

import { AuthContext, useAuthContext } from "../context/Auth.context";
import { setProfile } from "../store/profile/profile.slice";

export default function Layout() {
  const [_, pb] = useAuthContext();
  const [token] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    pb.collection("profile")
      .getFirstListItem(`appName="${process.env.REACT_APP_APP_NAME}"`)
      .then((res) => dispatch(setProfile(res)));

    api.getProfile().then((res: any) => {
      const { theme, ...state } = res.data;
      dispatch(setUI(state));
      if (!!theme) {
        setTheme(theme);
      }
    });
  }, [dispatch, pb]);

  const setTheme = (theme: UiTheme) => {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(`--theme-${key}`, value);
    }
  };

  return (
    <main>
      <AuthContext.Provider
        value={{
          token,
        }}
      >
        <PreHeader />
        <Header />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </main>
  );
}
