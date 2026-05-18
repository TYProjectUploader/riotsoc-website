const layerBase =
  "pointer-events-none fixed left-1/2 top-[30%] -z-10 h-[450vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 rotate-[65deg] bg-repeat portrait:min-h-[calc(100vw+100vh)] portrait:min-w-[calc(100vw+100vh)]";

export default function Background() {
  return (
    <>
      <div
        className={`${layerBase} bg-[url('/Images/background/streaks.png')] bg-[length:45%_200%]`}
        aria-hidden
      />
      <div
        className={`${layerBase} bg-[url('/Images/background/whitedots.png')] bg-[length:55%_200%]`}
        aria-hidden
      />
      <div
        className={`${layerBase} bg-[url('/Images/background/reddots.png')] bg-[length:100%_200%]`}
        aria-hidden
      />
    </>
  );
}
