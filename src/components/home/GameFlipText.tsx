import Image from "next/image";

const games = [
  {
    logo: "/Images/game-logos/lollogo1-01.png",
    title: "LOL",
    alt: "League of Legends",
  },
  {
    logo: "/Images/game-logos/Valorantlogo-01.png",
    title: "Val",
    alt: "Valorant",
  },
  {
    logo: "/Images/game-logos/tftlogo-01.png",
    title: "TFT",
    alt: "Teamfight Tactics",
  },
];

const flipSlides = [...games, games[0]];

export default function GameFlipText() {
  return (
    <div className="@container flex flex-col gap-4 text-[1.5em] @min-[34rem]:flex-row @min-[34rem]:items-start @min-[34rem]:justify-between @min-[34rem]:gap-x-4 @min-[34rem]:gap-y-0">
      <div className="flex min-w-0 flex-col">
        <p className="m-0 text-left text-[2em] font-bold uppercase leading-snug">
          Join us for
        </p>

        <div className="min-w-0 text-left text-[2em] font-bold uppercase">
          <div className="h-[2.25em] w-full max-w-full translate-z-0 overflow-hidden">
            <span className="flex flex-col animate-game-flip">
              {flipSlides.map((game, index) => (
                <span
                  key={`${game.title}-${index}`}
                  className="flex h-[2.25em] w-max max-w-full shrink-0 items-center gap-2 pr-1 text-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={game.logo}
                    alt={game.alt}
                    className="h-[1.75em] w-auto shrink-0 object-contain"
                  />
                  <span className="shrink-0 text-[1.4em] leading-none">
                    {game.title}
                  </span>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="shrink-0 text-left text-[1.2em] @min-[34rem]:text-right">
        <p className="m-0 leading-snug">
          Click to join our{" "}
          <span className="@min-[34rem]:hidden">
            <br />
          </span>
          discord{" "}
          <a
            href="https://discord.com/invite/unswriotsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block align-middle"
          >
            <Image
              src="/Images/social-logos/discord-logo.png"
              alt="Discord"
              width={45}
              height={45}
              className="inline h-[45px] w-[45px] align-middle"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
