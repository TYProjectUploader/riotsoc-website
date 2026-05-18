import { ReactNode } from "react";

export default function ContentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto my-8 max-w-[900px] rounded-2xl bg-black/35 p-8 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-[max-width] duration-300 max-[900px]:my-0 max-[900px]:max-w-full max-[900px]:rounded-none">
      {children}
    </div>
  );
}
