"use client";

import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DividerHeading from "@/components/layout/DividerHeading";
import { stripRubricInlineStyles } from "@/lib/rubric/sanitizeHtml";
import type { RubricEventDetails } from "@/lib/rubric/types";

export default function PastEventDetails() {
  const params = useParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<RubricEventDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      if (!eventId) return;

      const url = "https://api.hellorubric.com/";
      const detailsObj = { eventId };

      const fetchParams = new URLSearchParams();
      fetchParams.append("details", JSON.stringify(detailsObj));
      fetchParams.append(
        "endpoint",
        "https://appserver.getqpay.com:9090/AppServerSwapnil/event/details",
      );

      try {
        const response = await fetch(url, {
          method: "POST",
          body: fetchParams,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.eventDetails) {
          setEvent(result.eventDetails);
        } else {
          setEvent(null);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (isLoading) {
    return (
      <p className="py-8 text-center font-[family-name:var(--font-dm-sans)] text-white/70">
        Loading event details...
      </p>
    );
  }

  if (!event) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <h2 className="text-2xl">Event not found</h2>
        <Link href="/schedule" className="underline hover:text-white/90">
          &larr; Back to schedule
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link
        href="/schedule"
        className="mb-6 inline-block font-[family-name:var(--font-dm-sans)] underline hover:text-white/90"
      >
        &larr; Back to schedule
      </Link>

      {event.hasBannerImage && (
        <div className="relative mb-6 aspect-[16/9] max-h-[320px] w-full overflow-hidden rounded-2xl">
          <Image
            src={event.bannerImageURL}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      )}

      <div className="rounded-2xl border border-white/10 bg-white/95 p-6 text-[#0f1923] shadow-md sm:p-8">
        <h1 className="mb-2 text-3xl">{event.eventName}</h1>
        <p className="mb-6 font-[family-name:var(--font-dm-sans)] text-gray-600">
          Ended: {event.eventEndTime}
        </p>

        <DividerHeading>Details</DividerHeading>
        <div className="font-[family-name:var(--font-dm-sans)] text-[#0f1923] [&_a]:text-blue-700 [&_a]:underline [&_h1]:mb-4 [&_h1]:text-2xl [&_h2]:mb-3 [&_h2]:text-xl [&_h3]:mb-2 [&_h3]:text-lg [&_img]:my-4 [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
          {parse(stripRubricInlineStyles(event.eventDescription))}
        </div>
      </div>
    </article>
  );
}
