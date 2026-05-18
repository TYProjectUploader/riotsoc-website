import type { Metadata } from "next";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Frequently Asked Questions about RiotSoc",
};

export default function FaqPage() {
  return (
    <PageLayoutWithFooter>
      <section className="w-full pb-[30px]">
        <DividerHeading balance>FAQ</DividerHeading>
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="m-[0.8rem] rounded-[7px] border border-[#ccc] p-2 transition-all duration-300 ease-in-out"
          >
            <summary className="cursor-pointer text-[1.5rem] font-bold">
              {item.question}
            </summary>
            <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-[1.2rem]">
              {item.answer}
            </p>
          </details>
        ))}
      </section>
    </PageLayoutWithFooter>
  );
}
