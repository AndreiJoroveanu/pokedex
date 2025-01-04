import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "../components/Navbar.tsx";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <ScrollRestoration />
  </>
);
export default AppLayout;
