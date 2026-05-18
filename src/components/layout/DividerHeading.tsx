import { ReactNode } from "react";

export default function DividerHeading({
  children,
  balance = false,
}: {
  children: ReactNode;
  balance?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-center">
      <div className="h-px flex-1 bg-[#ccc]" />
      <h2
        className={`pt-3 text-[2rem] ${balance ? "text-balance" : "whitespace-nowrap"}`}
      >
        {children}
      </h2>
      <div className="h-px flex-1 bg-[#ccc]" />
    </div>
  );
}
