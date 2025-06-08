import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

const ThemeIcon = () => {
  const effectiveTheme = useSettingsStore((state) => state.effectiveTheme);

  const Icon = themeOptions.find((item) => item.theme === effectiveTheme)?.icon;

  return Icon ? (
    <Icon className="xs:size-6 size-5" />
  ) : (
    <QuestionMarkCircleIcon className="xs:size-6 size-5" />
  );
};
export default ThemeIcon;
