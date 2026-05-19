"use client";

import { useEffect, useState } from "react";
import DividerHeading from "@/components/layout/DividerHeading";
import EventCard from "@/components/schedule/EventCard";
import PastEventCard from "@/components/schedule/PastEventCard";
import type { RubricApiResponse, RubricEvent } from "@/lib/rubric/types";

const gridClasses = "grid grid-cols-1 gap-6 sm:grid-cols-2";

export default function ScheduleContent() {
  const [todayEvents, setTodayEvents] = useState<RubricEvent[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<RubricEvent[]>([]);
  const [pastEvents, setPastEvents] = useState<RubricEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSocietyData = async () => {
      const url = "https://api.hellorubric.com/";
      const detailsObj = {
        societyid: "12717",
        domain: "campus.hellorubric.com",
      };

      const params = new URLSearchParams();
      params.append("details", JSON.stringify(detailsObj));
      params.append("endpoint", "getSocietyLandingPage");

      try {
        const response = await fetch(url, {
          method: "POST",
          body: params,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = (await response.json()) as RubricApiResponse;
        const eventsSection = result.sections.find(
          (sec) => sec.sectionname === "Events",
        );

        if (eventsSection?.array) {
          const allEvents = eventsSection.array;
          const now = new Date();
          const todayString = now.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          });
          const isToday = (event: RubricEvent) =>
            event.formatteddate.includes(todayString);

          setTodayEvents(allEvents.filter((e) => isToday(e)));
          setUpcomingEvents(
            allEvents.filter((e) => e.upcoming === 1 && !isToday(e)),
          );
          setPastEvents(
            allEvents.filter((e) => e.upcoming === 0 && !isToday(e)),
          );
        }
      } catch (err) {
        console.error("Error fetching schedule:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocietyData();
  }, []);

  if (isLoading) {
    return (
      <p className="py-8 text-center font-[family-name:var(--font-dm-sans)] text-white/70">
        Loading society schedule...
      </p>
    );
  }

  const hasAnyEvents =
    todayEvents.length > 0 ||
    upcomingEvents.length > 0 ||
    pastEvents.length > 0;

  if (!hasAnyEvents) {
    return (
      <p className="py-8 text-center font-[family-name:var(--font-dm-sans)] text-white/70">
        No events found on Rubric right now. Check back soon or see our{" "}
        <a href="/events" className="underline hover:text-white">
          weekly events
        </a>
        .
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {todayEvents.length > 0 && (
        <section>
          <DividerHeading>Today</DividerHeading>
          <div className={gridClasses}>
            {todayEvents.map((event) => (
              <EventCard key={event.eventid} event={event} />
            ))}
          </div>
        </section>
      )}

      {upcomingEvents.length > 0 && (
        <section>
          <DividerHeading>Upcoming Events</DividerHeading>
          <div className={gridClasses}>
            {upcomingEvents.map((event) => (
              <EventCard key={event.eventid} event={event} />
            ))}
          </div>
        </section>
      )}

      {upcomingEvents.length === 0 && (
        <section>
          <DividerHeading>Upcoming Events</DividerHeading>
          <p className="font-[family-name:var(--font-dm-sans)]">
            No upcoming events for the time being. Check back soon!
          </p>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section>
          <DividerHeading>Past Events</DividerHeading>
          <div className={gridClasses}>
            {pastEvents.map((event) => (
              <PastEventCard key={event.eventid} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
