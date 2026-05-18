import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/UNSWRiotSoc/",
    src: "/Images/social-logos/fblogo-01.png",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/unswriotsoc/",
    src: "/Images/social-logos/instalogo.png",
    alt: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@unsw_riotsoc",
    src: "/Images/social-logos/tiktoklogo.png",
    alt: "TikTok",
  },
  {
    href: "https://www.youtube.com/@unswriotsoc",
    src: "/Images/social-logos/ytlogo.png",
    alt: "YouTube",
  },
  {
    href: "https://www.twitch.tv/unswriotsoc",
    src: "/Images/social-logos/twitch.png",
    alt: "Twitch",
  },
];

export default function Footer() {
  return (
    <footer className="text-center mt-6">
      <h1 className="text-4xl">Connect with our community</h1>
      <div className="flex justify-center pb-4 pt-2">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-2">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[35px] w-16 shrink-0 sm:w-[4.5rem]"
            >
              <Image
                src={link.src}
                alt={link.alt}
                fill
                sizes="(max-width: 640px) 64px, 72px"
                className="object-contain object-center"
              />
            </a>
          ))}
        </div>
      </div>
      <h4 className="text-2xl">Enquiries: team@riotsoc.com</h4>
      <p className="mt-2 text-xs leading-relaxed">
        RiotSoc UNSW is an independent, student-run fan society that is not
        affiliated with, endorsed by, or sponsored by Riot Games, Inc. All
        trademarks, game titles, logos, and images used on this site or in our
        promotional material are the property of Riot Games, Inc. and are used
        here for fan purposes only.
      </p>
      <p className="mt-1 text-xs leading-relaxed">
        Developed and maintained by IT team with media provided by Riotsoc Media
        team
      </p>
    </footer>
  );
}
