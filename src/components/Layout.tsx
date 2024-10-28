import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PreHeader from "./PreHeader/PreHeader";

import {
  getFavIcon,
  getProfileName,
  setProfile,
} from "../store/profile/profile.slice";
import { setTheme } from "../store/theme/theme.slice";
import PocketBase from "pocketbase";
import { Helmet } from "react-helmet";
import _ from "lodash";

export default function Layout() {
  const appName = useSelector(getProfileName);
  const favIcon = useSelector(getFavIcon);

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
      const { logo, footerLogo, id, collectionId, primary, ...other } = theme;
      setCssVars({
        primary,
        ...other,
      });
      dispatch(setTheme({ logo, footerLogo, id, collectionId, primary }));
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
    <>
      <Helmet>
        <title>{appName}</title>
        <link rel="icon" type="image/x-icon" href={favIcon}></link>
      </Helmet>
      <main>
        <PreHeader />
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
