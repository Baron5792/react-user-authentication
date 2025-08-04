import Header from "../partials/Header";
import { Outlet } from "react-router-dom";
import styes from '../pages/Login.module.css';
// import Alert from "./Alert";

function Layout() {
    return (
        <>
            <div className={`${styes['main-container']} pt-5 rounded`}>
                <Header/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;