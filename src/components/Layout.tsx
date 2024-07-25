import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setUI } from "../ui/store/ui.slice";

export default function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/ui.json')
            .then((res: AxiosResponse) => dispatch(setUI(res.data)))
    }, [dispatch])

    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
};