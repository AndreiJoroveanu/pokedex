import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./Navbar.tsx";

const AppLayout = () => (
  <div
    id="app-layout"
    className="text-slate-800 transition-colors dark:text-slate-200"
  >
    {/* App background */}
    <div className="fixed inset-0 -z-50 bg-slate-50 transition-colors dark:bg-slate-900" />

    <Navbar />
    <Outlet />
    <ScrollRestoration />
  </div>
);
export default AppLayout;
