import Image from "next/image";
import type { RubricEvent } from "@/lib/rubric/types";

export default function EventCard({ event }: { event: RubricEvent }) {
  return (
    <a
      href={event.destination}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white/95 text-left text-[#0f1923] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200">
        <Image
          src={event.image}
          alt={`Banner for ${event.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-red-700">
          {event.title}
        </h3>
        <div className="mt-auto flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-600">
            {event.formatteddate}
          </span>
          <span className="truncate text-sm text-gray-500">{event.subtitle}</span>
          <span className="mt-3 border-t border-gray-200 pt-3 font-bold text-emerald-700">
            {event.info}
          </span>
        </div>
      </div>
    </a>
  );
}
