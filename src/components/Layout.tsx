import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import PreHeader from "./PreHeader/PreHeader";

import { setProfile } from "../store/profile/profile.slice";
import { setTheme } from "../store/theme/theme.slice";
import PocketBase from "pocketbase";

export default function Layout() {
  const pb = useMemo(() => new PocketBase(process.env.REACT_APP_API_URL), []);

  const dispatch = useDispatch();

  const init = useCallback(async () => {
    const profile = await pb
      .collection("profile")
      .getOne(process.env.REACT_APP_ID);

    if (profile) {
      dispatch(setProfile(profile));
    }

    const theme: any = await pb
      .collection("theme")
      .getFirstListItem(`profile="${process.env.REACT_APP_ID}"`);

    if (theme) {
      const { logo, footerLogo, id, collectionId, ...other } = theme;
      setCssVars(other);
      dispatch(setTheme({ logo, footerLogo, id, collectionId }));
    }
  }, [pb, dispatch]);

  useEffect(() => {
    init();
  }, [init]);

  const setCssVars = (theme: any) => {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(
        `--theme-${key}`,
        value as string
      );
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
