import Image from "next/image";
import Link from "next/link";
import type { RubricEvent } from "@/lib/rubric/types";

export default function PastEventCard({ event }: { event: RubricEvent }) {
  return (
    <Link href={`/pastEvents/${event.eventid}`} className="group">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#d7d9db]/95 text-[#0f1923] shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1923]/20">
          <Image
            src={event.image}
            alt={`Banner for ${event.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 400px"
            className="object-cover saturate-[0.65] brightness-[0.92] transition-all duration-500 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-[#0f1923]/85 px-2 py-0.5 text-xs font-[family-name:var(--font-uni-sans)] uppercase tracking-wider text-white">
            Past
          </span>
          <div className="absolute inset-0 flex items-center justify-center bg-[#0f1923]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold tracking-wide text-white">
              View recap
            </span>
          </div>
        </div>
        <div className="flex flex-grow flex-col border-t border-[#0f1923]/15 p-5 text-left">
          <h3 className="mb-2 text-xl font-bold leading-tight text-[#0f1923]/80 group-hover:text-red-900">
            {event.title}
          </h3>
          <div className="mt-auto flex flex-col gap-1 font-[family-name:var(--font-dm-sans)]">
            <span className="text-sm font-medium text-[#0f1923]/65">
              {event.formatteddate}
            </span>
            <span className="truncate text-sm text-[#0f1923]/55">
              {event.subtitle}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
