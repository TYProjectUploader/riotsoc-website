import type { Metadata } from "next";
import Image from "next/image";
import DividerHeading from "@/components/layout/DividerHeading";
import { PageLayoutWithFooter } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "RiotSoc UNSW",
  description: "Meet the internal members running Riotsoc!",
};

const executives = [
  "/Images/riotsocteam/president.png",
  "/Images/riotsocteam/VP.png",
  "/Images/riotsocteam/VP2.png",
  "/Images/riotsocteam/treasurer.png",
  "/Images/riotsocteam/gediofficer.png",
  "/Images/riotsocteam/eventdirector1.png",
  "/Images/riotsocteam/eventdirector2.png",
  "/Images/riotsocteam/mediadirector1.png",
  "/Images/riotsocteam/mediadirector2.png",
];

const eventsTeam = [
  { name: "Atakan Ozturk: ", handle: "@Slick" },
  { name: "Dedrick Zheng: ", handle: "@Drink" },
  { name: "Diana Daixing: ", handle: "@diana" },
  { name: "Donny Chung: ", handle: "@donnyツ" },
  { name: "Gabby Zhong: ", handle: "@chimology" },
  { name: "Timothy Truong: ", handle: "@Jelloshi" },
  { name: "Lewis Duong: ", handle: "@meow" },
  { name: "Patrick Cheung: ", handle: "@Platicookie" },
  { name: "Ringo Jiang: ", handle: "@Ognir" },
  { name: "Sean Diep: ", handle: "@Sheep" },
  { name: "Tim Yang: ", handle: "@Zef" },
  { name: "Jaylon Cheung: ", handle: "@Squidgy" },
];

const mediaTeam = [
  { name: "Ava Kim: ", handle: "@Aba" },
  { name: "Henry Tat: ", handle: "@somelazyturtle" },
  { name: "Katherine Liu: ", handle: "@quiem" },
  { name: "Kei Nguyen: ", handle: "@valorant kei" },
  { name: "Khai Pham: ", handle: "@Kyhii" },
  { name: "Reggie Fox: ", handle: "@sharkbroth 🦈" },
  { name: "Will Guan: ", handle: "@stor79" },
  { name: "Tim Yang: ", handle: "@Zef" },
  { name: "Jaylon Cheung: ", handle: "@Squidgy" },
];

function TeamList({ members }: { members: { name: string; handle: string }[] }) {
  const midpoint = Math.ceil(members.length / 2);
  const columns = [members.slice(0, midpoint), members.slice(midpoint)];

  return (
    <div className="flex justify-evenly font-[family-name:var(--font-uni-sans)]">
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className="list-none">
          {column.map((member) => (
            <li
              key={member.name + member.handle}
              className="flex flex-row max-[700px]:flex-col"
            >
              <span>{member.name}</span>
              <span>{member.handle}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <PageLayoutWithFooter>
      <DividerHeading>Executives</DividerHeading>
      <div className="flex flex-wrap justify-center gap-4">
        {executives.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Executive team member"
            width={400}
            height={500}
            className="min-w-[300px] flex-[1_1_45%] rounded-2xl max-[679.5px]:flex-1"
          />
        ))}
      </div>

      <DividerHeading>Events Team</DividerHeading>
      <div className="flex justify-center">
        <Image
          src="/Images/riotsocteam/eventsteam.jpg"
          alt="Events team"
          width={800}
          height={450}
          className="m-4 w-[90%] rounded-2xl"
        />
      </div>
      <TeamList members={eventsTeam} />

      <DividerHeading>Media Team</DividerHeading>
      <div className="flex justify-center">
        <Image
          src="/Images/riotsocteam/mediateam.jpg"
          alt="Media team"
          width={800}
          height={450}
          className="m-4 w-[90%] rounded-2xl"
        />
      </div>
      <TeamList members={mediaTeam} />
    </PageLayoutWithFooter>
  );
}
