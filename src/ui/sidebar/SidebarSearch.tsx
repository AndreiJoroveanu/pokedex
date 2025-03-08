import { useUrlParams } from "@/hooks/useUrlParams.ts";

const SidebarSearch = ({ itemType }: { itemType: string }) => {
  const { getUrlParam, setUrlParam } = useUrlParams();

  return (
    <input
      type="text"
      placeholder={`Search by ${itemType} name`}
      defaultValue={getUrlParam("q") ?? ""}
      onChange={(e) => setUrlParam("q", e.target.value)}
      className="w-full rounded-xl border border-slate-400/70 bg-slate-100 py-2 text-center shadow-md transition-colors hover:bg-slate-200/75 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none dark:focus:shadow-none"
    />
  );
};
export default SidebarSearch;
