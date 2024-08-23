import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

function Layout() {
    return (<>
        <Navbar/>
        <div>
            <Outlet />
        </div>
    </>);
}
export default Layout;