import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Weekly social and gaming sessions at Riotsoc.",
};

export default function EventsPage() {
  return (
    <PageLayoutWithFooter>
      <DividerHeading>Events</DividerHeading>
      <p className="mb-4 font-[family-name:var(--font-dm-sans)]">
        Recurring sessions and community hangouts during the term. For one-off
        society events and Rubric sign-ups, see the{" "}
        <Link href="/schedule" className="underline hover:text-white/90">
          Schedule
        </Link>{" "}
        page.
      </p>

      <DividerHeading>Weekly Events</DividerHeading>
      <h3 className="text-2xl">Social Sessions</h3>
      <p className="font-[family-name:var(--font-dm-sans)]">
        These are weekly chill hangout sessions with fellow riotsoc members
        during the term where we typically play board games and such in a room on campus. <br />
        There is free food and opportunities to make friends! Check for specific dates and times in
        our discord.
      </p>
      <div className="flex justify-center">
        <Image
          src="/Images/Events/social_sesh.png"
          alt="Social sessions"
          width={720}
          height={400}
          className="w-[80%] rounded-2xl object-contain"
        />
      </div>
      <div className="mt-8" />
      <h3 className="text-2xl">Gaming Weeklies</h3>
      <p className="font-[family-name:var(--font-dm-sans)]">
        These are gaming sessions that run throughout the term, check discord
        for latest updates.
        <br />
        League weeklies on every Friday from 7:30pm.
        <br />
        Valorant weeklies every Saturday from 7:30pm.
      </p>
      <div className="flex justify-center">
        <Image
          src="/Images/Events/weekly.png"
          alt="Gaming weeklies"
          width={720}
          height={400}
          className="w-[80%] rounded-2xl object-contain"
        />
      </div>

      <p className="text-right">
        Find out more on our discord!{" "}
        <a
          href="https://discord.com/invite/unswriotsoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/social-logos/discord-logo.png"
            alt="Discord"
            width={45}
            height={45}
            className="inline h-[45px] w-[45px]"
          />
        </a>
      </p>
    </PageLayoutWithFooter>
  );
}
