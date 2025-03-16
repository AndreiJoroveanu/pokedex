import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "@/components/navbar/Navbar.tsx";
import AppProvider from "@/app/AppProvider.tsx";

const AppLayout = () => (
  <div
    id="app-layout"
    className="font-medium text-slate-800 transition-colors dark:text-slate-200"
  >
    {/* App background */}
    <div className="fixed inset-0 -z-50 h-screen bg-slate-100 transition-colors dark:bg-slate-900" />

    <Navbar />

    <AppProvider>
      <Outlet />
    </AppProvider>

    <ScrollRestoration />
  </div>
);
export default AppLayout;
