import { ReactNode } from "react";

import SidebarSearch from "@/ui/sidebar/SidebarSearch.tsx";
import SidebarGenerationFilter from "@/ui/sidebar/SidebarGenerationFilter.tsx";
import SidebarTypeFilter from "@/ui/sidebar/SidebarTypeFilter.tsx";
import SidebarOnlyStarredToggle from "@/ui/sidebar/SidebarOnlyStarredToggle.tsx";
import SidebarClearFilter from "@/ui/sidebar/SidebarClearFilter.tsx";

const Sidebar = ({ children }: { children: ReactNode }) => (
  <aside className="z-10 p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:min-w-62 lg:overflow-y-scroll">
    {children}
  </aside>
);

Sidebar.Search = SidebarSearch;
Sidebar.GenerationFilter = SidebarGenerationFilter;
Sidebar.TypeFilter = SidebarTypeFilter;
Sidebar.OnlyStarredToggle = SidebarOnlyStarredToggle;
Sidebar.ClearFilter = SidebarClearFilter;

export default Sidebar;
