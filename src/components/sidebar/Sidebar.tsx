import type { ReactNode } from "react";

import SidebarSearch from "@/components/sidebar/SidebarSearch.tsx";
import SidebarGenerationFilter from "@/components/sidebar/SidebarGenerationFilter.tsx";
import SidebarTypeFilter from "@/components/sidebar/SidebarTypeFilter.tsx";
import SidebarOnlyStarredToggle from "@/components/sidebar/SidebarOnlyStarredToggle.tsx";
import SidebarClearFilter from "@/components/sidebar/SidebarClearFilter.tsx";

const Sidebar = ({ children }: { children: ReactNode }) => (
  <aside className="z-10 mask-t-from-99% mask-t-to-100% p-4 max-lg:pb-0 max-sm:pt-0 lg:fixed lg:h-[calc(100vh-80px)] lg:w-1/5 lg:max-w-80 lg:min-w-62.5 lg:overflow-y-scroll">
    {children}
  </aside>
);

Sidebar.Search = SidebarSearch;
Sidebar.GenerationFilter = SidebarGenerationFilter;
Sidebar.TypeFilter = SidebarTypeFilter;
Sidebar.OnlyStarredToggle = SidebarOnlyStarredToggle;
Sidebar.ClearFilter = SidebarClearFilter;

export default Sidebar;
