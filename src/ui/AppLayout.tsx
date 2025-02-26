import { Outlet, ScrollRestoration, useLocation } from "react-router";

import Navbar from "./Navbar.tsx";

const AppLayout = () => {
  const location = useLocation();

  return (
    <div
      id="app-layout"
      className="font-medium text-slate-800 transition-colors dark:text-slate-200"
    >
      {/* App background */}
      <div className="fixed inset-0 -z-50 h-screen bg-slate-50 transition-colors dark:bg-slate-900" />

      <Navbar />

      <Outlet key={location.pathname} />

      <ScrollRestoration />
    </div>
  );
};
export default AppLayout;
