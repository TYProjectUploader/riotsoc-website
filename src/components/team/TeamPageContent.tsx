"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import DividerHeading from "@/components/layout/DividerHeading";
import ExecutiveGrid from "@/components/team/ExecutiveGrid";
import TeamList from "@/components/team/TeamList";
import TeamYearSelector from "@/components/team/TeamYearSelector";
import { CURRENT_TEAM_YEAR, getTeamYear } from "@/data/team";

export default function TeamPageContent() {
  const [selectedYear, setSelectedYear] = useState(CURRENT_TEAM_YEAR);
  const team = useMemo(() => getTeamYear(selectedYear), [selectedYear]);
  const isCurrentYear = selectedYear === CURRENT_TEAM_YEAR;

  return (
    <>
      <TeamYearSelector selectedYear={selectedYear} onSelect={setSelectedYear} />

      <DividerHeading>
        {isCurrentYear ? "Executives" : `${selectedYear} Executives`}
      </DividerHeading>
      <ExecutiveGrid executives={team.executives} />

      <DividerHeading>
        {isCurrentYear ? "Directors" : `${selectedYear} Directors`}
      </DividerHeading>
      <ExecutiveGrid executives={team.directors} />

      <DividerHeading>
        {isCurrentYear ? "Events Team" : `${selectedYear} Events Team`}
      </DividerHeading>
      <div className="flex justify-center">
        <Image
          src={team.eventsTeamPhoto}
          alt="Events team"
          width={800}
          height={450}
          className="m-4 w-[90%] rounded-2xl"
        />
      </div>
      <TeamList members={team.eventsTeam} />

      <DividerHeading>
        {isCurrentYear ? "Media Team" : `${selectedYear} Media Team`}
      </DividerHeading>
      <div className="flex justify-center">
        <Image
          src={team.mediaTeamPhoto}
          alt="Media team"
          width={800}
          height={450}
          className="m-4 w-[90%] rounded-2xl"
        />
      </div>
      <TeamList members={team.mediaTeam} />

      {team.productionTeam.length > 0 && (
        <>
          <DividerHeading>
            {isCurrentYear ? "Production Team" : `${selectedYear} Production Team`}
          </DividerHeading>
          {team.productionTeamPhoto && (
            <div className="flex justify-center">
              <Image
                src={team.productionTeamPhoto}
                alt="Production team"
                width={800}
                height={450}
                className="m-4 w-[90%] rounded-2xl"
              />
            </div>
          )}
          <TeamList members={team.productionTeam} />
        </>
      )}
    </>
  );
}
