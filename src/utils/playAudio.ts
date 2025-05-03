export const playAudio = (src: string) => {
  const audio = new Audio(src);
  audio.volume = 0.02 * Number(localStorage.getItem("volume") ?? 5);

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
