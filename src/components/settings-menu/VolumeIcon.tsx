import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";

const VolumeIcon = () => {
  const volume = useSettingsStore((state) => state.volume);

  return volume > 0 ? (
    <SpeakerWaveIcon className="size-5 xs:size-6" />
  ) : (
    <SpeakerXMarkIcon className="size-5 xs:size-6" />
  );
};
export default VolumeIcon;
