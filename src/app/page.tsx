import type { Metadata } from "next";
import GameFlipText from "@/components/home/GameFlipText";
import IntroHero from "@/components/home/IntroHero";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description:
    "Riotsoc UNSW: We're the hub at UNSW for anyone interested in Riot's games.",
};

export default function HomePage() {
  return (
    <PageLayoutWithFooter>
      <IntroHero />

      <p className="pt-12 font-[family-name:var(--font-uni-sans)]">
        We&apos;re the hub at UNSW for anyone interested in Riot&apos;s games.{" "}
        <br />
      </p>

      <h2 className="font-[family-name:var(--font-uni-sans)]">
        Are you looking for people to play with?
      </h2>
      <br />
      <p className="-mt-6 font-[family-name:var(--font-dm-sans)]">
        Our community is extremely active and welcoming with all our events open
        to everyone (even if you&apos;re non-UNSW!). We often run a range of
        casual and competitive events including trivia night, ARAM tournaments
        and weekly gaming sessions!
        <br />
        <br />
        Be sure to join our discord server for all the latest updates!
      </p>

      <div className="mt-[30px]">
        <GameFlipText />
      </div>
    </PageLayoutWithFooter>
  );
}
