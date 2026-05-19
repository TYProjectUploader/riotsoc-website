import type { Metadata } from "next";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";
import PastEventDetails from "@/components/schedule/PastEventDetails";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Past Riotsoc event details.",
};

export default function PastEventPage() {
  return (
    <PageLayoutWithFooter>
      <PastEventDetails />
    </PageLayoutWithFooter>
  );
}
