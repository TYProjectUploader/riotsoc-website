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

export default function GameFlipText() {
  return (
    <div className="flex flex-col gap-6 text-[1.5em] lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-x-8">
      <div className="w-full max-w-full text-left text-[2em] font-bold uppercase lg:flex-1">
        <p className="m-0 leading-snug">
          <span className="block lg:inline lg:whitespace-normal">
            Join us for{" "}
          </span>
          <span className="mt-1 inline-block h-[2em] w-full max-w-full align-bottom [overflow-x:visible] [overflow-y:hidden] lg:mt-0 lg:w-auto lg:max-w-none">
            <span className="block animate-game-flip">
              {games.map((game) => (
                <span
                  key={game.title}
                  className="box-border block h-[2em] w-max max-w-full pl-[15%] pr-3 text-white lg:pr-4"
                >
                  <span className="inline-block h-full align-middle">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={game.logo}
                      alt={game.alt}
                      className="inline h-full align-middle"
                    />
                  </span>{" "}
                  <span className="inline-block h-full align-middle text-[1.4em]">
                    {game.title}
                  </span>
                </span>
              ))}
            </span>
          </span>
        </p>
      </div>
      <div className="w-full max-w-full text-left lg:w-auto lg:max-w-[min(100%,18rem)] lg:flex-none lg:text-right">
        <p className="m-0 leading-snug">
          Click to join our <br />
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
