import type { Metadata } from "next";
import Image from "next/image";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Riotsoc's Sponsors!",
};

const sponsors = ["/Images/sponsor-logos/ROGwhite.png"];

const affiliations = ["/Images/sponsor-logos/Arc_logo.png"];

export default function SponsorsPage() {
  return (
    <PageLayoutWithFooter>
      <DividerHeading>Sponsors</DividerHeading>
      <div className="flex flex-wrap items-center justify-around">
        {sponsors.map((src) => (
          <div
            key={src}
            className="m-2.5 flex h-[130px] min-w-[300px] flex-[1_1_45%] items-center justify-center rounded-2xl"
          >
            <Image
              src={src}
              alt="Sponsor logo"
              width={300}
              height={130}
              className="h-full w-[80%] object-contain"
            />
          </div>
        ))}
      </div>

      <DividerHeading>Affilliations</DividerHeading>
      <div className="flex flex-wrap items-center justify-around">
        {affiliations.map((src) => (
          <div
            key={src}
            className="m-2.5 flex h-[130px] min-w-[300px] flex-[1_1_45%] items-center justify-center rounded-2xl"
          >
            <Image
              src={src}
              alt="Affiliation logo"
              width={300}
              height={130}
              className="h-full w-[80%] object-contain"
            />
          </div>
        ))}
      </div>

      <p className="text-center font-[family-name:var(--font-dm-sans)]">
        Interested in sponsoring us? Please reach out to us at{" "}
        <a href="mailto:team@riotsoc.com">team@riotsoc.com.</a>
      </p>
    </PageLayoutWithFooter>
  );
}
