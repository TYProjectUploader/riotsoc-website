"use client";

import { CURRENT_TEAM_YEAR, teamYears } from "@/data/team";

type TeamYearSelectorProps = {
  selectedYear: number;
  onSelect: (year: number) => void;
};

export default function TeamYearSelector({
  selectedYear,
  onSelect,
}: TeamYearSelectorProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-3">
      <p className="font-[family-name:var(--font-dm-sans)] text-sm text-white/75">
        Select a year to view the team for that year
      </p>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Team year"
      >
        {teamYears.map((year) => {
          const isSelected = year === selectedYear;
          const isCurrent = year === CURRENT_TEAM_YEAR;

          return (
            <button
              key={year}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelect(year)}
              className={`rounded-full px-4 py-2 font-[family-name:var(--font-uni-sans)] text-sm transition-colors duration-150 ${
                isSelected
                  ? "bg-white text-[#0f1923] shadow-md"
                  : "bg-black/25 text-white hover:bg-black/40"
              }`}
            >
              {year}
              {isCurrent ? " · Current" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
