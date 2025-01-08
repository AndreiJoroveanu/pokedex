import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./Navbar.tsx";

const AppLayout = () => (
  <div className="text-slate-800 dark:text-slate-200">
    <div className="fixed -z-50 h-screen w-full bg-slate-50 dark:bg-slate-900" />
    <Navbar />
    <Outlet />
    <ScrollRestoration />
  </div>
);
export default AppLayout;
