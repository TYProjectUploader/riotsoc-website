import type { Metadata } from "next";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";
import TeamPageContent from "@/components/team/TeamPageContent";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Meet the internal members running Riotsoc!",
};

export default function TeamPage() {
  return (
    <PageLayoutWithFooter>
      <TeamPageContent />
    </PageLayoutWithFooter>
  );
}
