import type { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const faqItems: FaqItem[] = [
  {
    question: "Q. When are events happening?",
    answer:
      "Weekly we have sessions of Valorant and League of legends from week 1 up to flex week. Outside of that, we have a bunch of social events that happen every 2-3weeks which you can find on the events tab!",
  },
  {
    question: "Q. How do I come to events?",
    answer: (
      <>
        Details for each event can be found primarily through our discord.{" "}
        <br />
        You can also hover over the images in upcoming events on the events tab.
      </>
    ),
  },
  {
    question: "Q. What if I'm new to the game?",
    answer:
      "Riotsoc is full of people from all different skill levels, don't worry we're more than happy to help you learn the ropes to help you fit right in!",
  },
  {
    question: "Q. Do I need to be a UNSW student to come to events?",
    answer: (
      <>
        Nup! Our events are open to everyone! <br /> However in competitive
        tournaments we may have restrictions on how much of the team must be
        UNSW students.
      </>
    ),
  },
  {
    question: "Q. How do I become a member?",
    answer: (
      <>
        {" "}
        Sign up here:{" "}
        <a href="https://campus.hellorubric.com/?s=6335">
          🔗 Rubric
        </a>{" "}
        and join our discord if you haven&apos;t already.
      </>
    ),
  },
  {
    question: "Q. How do I verify myself on the discord server?",
    answer:
      "If you do not have a zID, you will need to message an executive with your full name, email and phone number. We may need to send a text to this phone number to verify it is you.",
  },
  {
    question: "Q. I want to help out with these events, what do I do?",
    answer:
      "Subcomittee applications open at the start of each year and director applications in term 3. Keep an eye out for those!",
  },
  {
    question: "Q. What do I do if I have a greviance?",
    answer:
      "Get in contact with our greviance officer. You'll be able to find them on our discord.",
  },
  {
    question: "Q. Are reddit depictions of Riotsoc true?",
    answer: "No. We touch grass. At least the grass on Summoner's Rift.",
  },
];
