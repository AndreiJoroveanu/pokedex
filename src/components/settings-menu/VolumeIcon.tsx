import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useAppStore from "@/store/useAppStore.ts";

const VolumeIcon = () => {
  const volume = useAppStore((state) => state.volume);

  return volume > 0 ? (
    <SpeakerWaveIcon className="xs:size-6 size-5" />
  ) : (
    <SpeakerXMarkIcon className="xs:size-6 size-5" />
  );
};
export default VolumeIcon;
