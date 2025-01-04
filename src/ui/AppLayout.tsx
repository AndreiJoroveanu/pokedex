import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./Navbar.tsx";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <ScrollRestoration />
  </>
);
export default AppLayout;
