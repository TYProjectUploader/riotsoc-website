import type { Metadata } from "next";
import Image from "next/image";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Find out what Riotsoc is all about and what we do!",
};

const aboutImages = [
  "/Images/About/IMG_1650.jpg",
  "/Images/About/oweek.jpg",
  "/Images/About/trivianight.jpg",
  "/Images/About/social.jpg",
];

export default function AboutPage() {
  return (
    <PageLayoutWithFooter>
      <DividerHeading>What are we</DividerHeading>
      <p className="font-[family-name:var(--font-dm-sans)]">
        Originally Est. August 2012 by Teo, Li and Leung-Harrison as the UNSW
        LoLSoc, we have since expanded to become Riot Games Society, a community
        of passionate and spirited students united by our love and hate for the
        worlds of League of Legends, VALORANT, Teamfight Tactics, and
        everything else made by Riot!
        <br />
        <br />
        With support from Arc @ UNSW and our sponsors, the Riot Games Society
        aims to promote an active and positive casual gaming scene within UNSW
        and the wider community. By offering frequent social and competitive
        events, in-person and online, all members and visitors can connect,
        compete, and collaborate through the diverse games of Riot.
        <br />
        <br />
        Whether it&apos;s the regular weekly gaming weeklies, rumble
        tournaments, or friendly social activites IRL, there&apos;s always new
        faces to meet and something on for people of all skill levels and
        familiarity with Riot&apos;s games.
        <br />
        <br />
        Membership is free.
        <br />
        <br />
        We invite you to join Riotsoc and become a part vibrant community.
        We&apos;ve got room for everyone - from first-timers to 1-tricks,
        casuals to climbers - so come game, chill, and make some memories with
        us!
      </p>

      <div className="flex flex-wrap justify-center">
        {aboutImages.map((src) => (
          <div
            key={src}
            className="w-1/2 rounded-2xl max-[500px]:h-[200px] max-[500px]:w-full max-[850px]:h-[250px]"
          >
            <Image
              src={src}
              alt="Riotsoc event photo"
              width={450}
              height={270}
              className="h-[270px] w-full rounded-2xl object-cover max-[500px]:max-h-full max-[850px]:max-h-full"
            />
          </div>
        ))}
      </div>
    </PageLayoutWithFooter>
  );
}
