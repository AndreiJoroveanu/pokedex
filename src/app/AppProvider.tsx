import { ReactNode, Suspense } from "react";
import { useLocation } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

import { queryClient } from "@/lib/reactQuery.ts";

import Loader from "@/components/Loader.tsx";
import ErrorMessage from "@/components/error/ErrorMessage.tsx";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="h-screen bg-slate-100 transition-colors dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        }
        key={location.pathname}
      >
        <ErrorBoundary
          FallbackComponent={({ error }: { error: Error }) => (
            <ErrorMessage errors={[error.message]} />
          )}
        >
          {children}
        </ErrorBoundary>
      </Suspense>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default AppProvider;
