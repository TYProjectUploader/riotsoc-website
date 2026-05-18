import Image from "next/image";
import type { Executive } from "@/data/team";

export default function ExecutiveGrid({ executives }: { executives: Executive[] }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-8">
      {executives.map((exec) => (
        <article
          key={`${exec.role}-${exec.name}-${exec.handle}`}
          className="flex w-[140px] shrink-0 flex-col items-center text-center sm:w-[160px] lg:w-[180px]"
        >
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-[#2a3540] shadow-md sm:h-32 sm:w-32">
            <Image
              src={exec.imageSrc}
              alt={`${exec.name}, ${exec.role}`}
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-cover object-top"
            />
          </div>
          <p className="mt-3 text-sm font-[family-name:var(--font-uni-sans)] uppercase tracking-wide text-white/80">
            {exec.role}
          </p>
          <p className="mt-1 text-lg leading-tight">{exec.name}</p>
          <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-sm text-white/85">
            {exec.handle}
          </p>
        </article>
      ))}
    </div>
  );
}
