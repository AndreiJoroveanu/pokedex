import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";

import Navbar from "./Navbar.tsx";
import Loader from "./Loader.tsx";

const AppLayout = () => (
  <div
    id="app-layout"
    className="text-slate-800 transition-colors dark:text-slate-200"
  >
    {/* App background */}
    <div className="fixed inset-0 -z-50 h-screen bg-slate-50 transition-colors dark:bg-slate-900" />

    <Navbar />

    <Suspense
      fallback={
        <div className="h-screen bg-slate-100 transition-colors dark:bg-slate-800">
          <Loader size={24} displaysText={true} />
        </div>
      }
    >
      <Outlet />
    </Suspense>

    <ScrollRestoration />
  </div>
);
export default AppLayout;
