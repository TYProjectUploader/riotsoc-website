import Image from "next/image";

export default function IntroHero() {
  return (
    <div className="relative -mx-8 -mt-8 flex h-[75vh] items-center justify-center overflow-hidden rounded-2xl">
      <Image
        src="/Images/home/front_img.jpg"
        alt="UNSW Riot Games Society"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute h-full w-full rounded-2xl bg-black/50" />
      <div className="relative z-[2] text-center text-white">
        <h1>Welcome to</h1>
        <h2 className="text-[4rem]">UNSW Riot Games Society</h2>
      </div>
    </div>
  );
}
