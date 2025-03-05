import { ReactNode } from "react";

import SidebarSearch from "./SidebarSearch.tsx";
import SidebarGenerationFilter from "@/ui/sidebar/SidebarGenerationFilter.tsx";
import SidebarTypeFilter from "@/ui/sidebar/SidebarTypeFilter.tsx";
import SidebarOnlyStarredToggle from "@/ui/sidebar/SidebarOnlyStarredToggle.tsx";
import SidebarClearFilter from "@/ui/sidebar/SidebarClearFilter.tsx";

const Sidebar = ({ children }: { children: ReactNode }) => (
  <aside className="p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:min-w-62 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600">
    {children}
  </aside>
);

Sidebar.Search = SidebarSearch;
Sidebar.GenerationFilter = SidebarGenerationFilter;
Sidebar.TypeFilter = SidebarTypeFilter;
Sidebar.OnlyStarredToggle = SidebarOnlyStarredToggle;
Sidebar.ClearFilter = SidebarClearFilter;

export default Sidebar;
