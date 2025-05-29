import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import useAppStore from "@/store/useAppStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

const ThemeIcon = () => {
  const effectiveTheme = useAppStore((state) => state.effectiveTheme);

  const Icon = themeOptions.find((item) => item.theme === effectiveTheme)?.icon;

  return Icon ? (
    <Icon className="xs:size-6 size-5" />
  ) : (
    <QuestionMarkCircleIcon className="xs:size-6 size-5" />
  );
};
export default ThemeIcon;
