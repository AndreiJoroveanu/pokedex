import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";

const VolumeIcon = () => {
  const isMuted = useSettingsStore((state) => state.isMuted);

  return isMuted ? (
    <SpeakerXMarkIcon className="size-5 xs:size-6" />
  ) : (
    <SpeakerWaveIcon className="size-5 xs:size-6" />
  );
};
export default VolumeIcon;
