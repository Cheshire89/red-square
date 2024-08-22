import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUI } from "../ui/store/ui.slice";
import PreHeader from "./PreHeader/PreHeader";
import { UiTheme } from "@uiStore/ui.model";
import api from "../services/Api.service";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getProfile().then((res: any) => {
      const { theme, ...state } = res.data;
      dispatch(setUI(state));
      if (!!theme) {
        setTheme(theme);
      }
    });
  }, [dispatch]);

  const setTheme = (theme: UiTheme) => {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(`--theme-${key}`, value);
    }
  };

  return (
    <main>
      <PreHeader />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
