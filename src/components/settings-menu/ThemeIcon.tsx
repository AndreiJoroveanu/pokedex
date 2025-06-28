import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

const ThemeIcon = () => {
  const effectiveTheme = useSettingsStore((state) => state.effectiveTheme);

  const Icon = themeOptions.find((item) => item.theme === effectiveTheme)?.icon;

  return Icon ? (
    <Icon className="size-5 xs:size-6" />
  ) : (
    <QuestionMarkCircleIcon className="size-5 xs:size-6" />
  );
};
export default ThemeIcon;
