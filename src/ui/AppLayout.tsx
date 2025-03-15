import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import Navbar from "@/ui/Navbar.tsx";
import Loader from "@/ui/Loader.tsx";
import ErrorMessage from "@/ui/ErrorMessage.tsx";

const AppLayout = () => {
  const location = useLocation();

  return (
    <div
      id="app-layout"
      className="font-medium text-slate-800 transition-colors dark:text-slate-200"
    >
      {/* App background */}
      <div className="fixed inset-0 -z-50 h-screen bg-slate-100 transition-colors dark:bg-slate-900" />

      <Navbar />

      <Suspense
        fallback={
          <div className="h-screen bg-slate-100 transition-colors dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        }
        key={location.key}
      >
        <ErrorBoundary
          FallbackComponent={({ error }: { error: Error }) => (
            <ErrorMessage errors={[error.message]} />
          )}
        >
          <Outlet />
        </ErrorBoundary>
      </Suspense>

      <ScrollRestoration />
    </div>
  );
};
export default AppLayout;
