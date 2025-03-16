import { useAllItemsParams } from "@/hooks/useUrlParams.ts";

const SidebarSearch = ({ itemType }: { itemType: string }) => {
  const { getUrlParam, setUrlParam } = useAllItemsParams();

  return (
    <input
      type="text"
      placeholder={`Search by ${itemType} name`}
      value={getUrlParam("q") ?? ""}
      onChange={(e) => setUrlParam("q", e.target.value)}
      className="w-full rounded-xl bg-slate-200 py-2 text-center shadow-md transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-lg focus:shadow-lg dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none dark:focus:shadow-none"
    />
  );
};
export default SidebarSearch;
