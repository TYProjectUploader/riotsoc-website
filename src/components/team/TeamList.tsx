import type { SubcommitteeMember } from "@/data/team";

export default function TeamList({ members }: { members: SubcommitteeMember[] }) {
  const midpoint = Math.ceil(members.length / 2);
  const columns = [members.slice(0, midpoint), members.slice(midpoint)];

  return (
    <div className="flex justify-evenly font-[family-name:var(--font-uni-sans)]">
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className="list-none max-[700px]:space-y-2">
          {column.map((member) => (
            <li
              key={member.name + member.handle}
              className="flex flex-row items-baseline gap-1 max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-0 max-[700px]:leading-tight"
            >
              <span className="max-[700px]:leading-tight">{member.name}:</span>
              <span className="font-[family-name:var(--font-dm-sans)] max-[700px]:leading-tight">
                {member.handle}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
