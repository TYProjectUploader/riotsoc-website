import type { SubcommitteeMember } from "@/data/team";

export default function TeamList({ members }: { members: SubcommitteeMember[] }) {
  const midpoint = Math.ceil(members.length / 2);
  const columns = [members.slice(0, midpoint), members.slice(midpoint)];

  return (
    <div className="flex justify-evenly font-[family-name:var(--font-uni-sans)]">
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className="list-none">
          {column.map((member) => (
            <li
              key={member.name + member.handle}
              className="flex flex-row gap-1 max-[700px]:flex-col"
            >
              <span>{member.name}:</span>
              <span className="font-[family-name:var(--font-dm-sans)]">
                {member.handle}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
