export const playAudio = (src: string) => {
  const volume = Number(localStorage.getItem("volume") ?? 5);
  const isMuted = localStorage.getItem("isMuted") === "true";

  const audio = new Audio(src);
  audio.volume = isMuted ? 0 : 0.02 * volume;

  const play = async () => {
    try {
      await audio.play();
    } catch {
      // Fail silently if playback is blocked
    }
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return { play, stop };
};
