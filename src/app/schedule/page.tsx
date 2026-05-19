import type { Metadata } from "next";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";
import ScheduleContent from "@/components/schedule/ScheduleContent";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Upcoming and past Riotsoc events from our Rubric schedule.",
};

export default function SchedulePage() {
  return (
    <PageLayoutWithFooter>
      <DividerHeading>Event Schedule</DividerHeading>
      <p className="mb-4 font-[family-name:var(--font-dm-sans)]">
        You can register for each upcoming event by clicking the event card to register on Rubric.
      </p>
      <ScheduleContent />
    </PageLayoutWithFooter>
  );
}
