import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setUI } from "../ui/store/ui.slice";
import PreHeader from "./PreHeader";
import { UiTheme } from "@uiStore/ui.model";

export default function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/ui.json')
            .then((res: AxiosResponse) => dispatch(setUI(res.data)))
    }, [dispatch])

    useEffect(() => {
        axios.get('/theme.json')
        .then(res => setTheme(res.data))
    }, [])


    const setTheme = (theme: UiTheme) => {
        for(const [key, value] of Object.entries(theme)){
            document.documentElement.style.setProperty(`--theme-${key}`, value);
        }
    }

    return (
        <main>
            <PreHeader />
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
};