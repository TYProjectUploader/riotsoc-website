const layerBase = "pointer-events-none fixed inset-0 -z-10 overflow-hidden";

export default function Background() {
  return (
    <div className={layerBase} aria-hidden="true">
      {/* Scaled square canvas rotated at 65deg */}
      <div 
        className="absolute top-1/2 left-1/2 w-[160vmax] h-[160vmax]"
        style={{ transform: "translate(-50%, -50%) rotate(65deg)" }}
      >
        <div className="relative w-full h-full">
          {/* ================= STREAKS ================= */}
          {/* Left / Top-Left Zone */}
          <div className="absolute left-[5%] top-[5%] w-[4px] md:w-[0.35vw] h-[45%] bg-[#ff1f35]" />
          <div className="absolute left-[8%] top-[55%] w-[3px] md:w-[0.25vw] h-[30%] bg-white opacity-90" />
          <div className="absolute left-[11%] top-[15%] w-[5px] md:w-[0.45vw] h-[55%] bg-[#ff1f35]" />
          <div className="absolute left-[14%] top-[40%] w-[3px] md:w-[0.25vw] h-[25%] bg-white opacity-80" />
          <div className="absolute left-[17%] top-[0%] w-[4px] md:w-[0.35vw] h-[60%] bg-[#ff1f35]" />
          <div className="absolute left-[20%] top-[65%] w-[2px] md:w-[0.2vw] h-[20%] bg-white opacity-90" />

          {/* Center-Left Zone */}
          <div className="absolute left-[23%] top-[10%] w-[5px] md:w-[0.45vw] h-[45%] bg-[#ff1f35]" />
          <div className="absolute left-[26%] top-[50%] w-[3px] md:w-[0.25vw] h-[35%] bg-white" />
          <div className="absolute left-[29%] top-[20%] w-[4px] md:w-[0.35vw] h-[50%] bg-[#ff1f35]" />
          <div className="absolute left-[32%] top-[60%] w-[3px] md:w-[0.25vw] h-[22%] bg-white opacity-85" />
          <div className="absolute left-[35%] top-[5%] w-[5px] md:w-[0.45vw] h-[65%] bg-[#ff1f35]" />
          <div className="absolute left-[38%] top-[45%] w-[2px] md:w-[0.2vw] h-[30%] bg-white opacity-90" />

          {/* True Center Zone (Guaranteed on screen) */}
          <div className="absolute left-[41%] top-[15%] w-[4px] md:w-[0.35vw] h-[40%] bg-[#ff1f35]" />
          <div className="absolute left-[44%] top-[55%] w-[3px] md:w-[0.25vw] h-[35%] bg-white" />
          <div className="absolute left-[47%] top-[0%] w-[5px] md:w-[0.45vw] h-[55%] bg-[#ff1f35]" />
          <div className="absolute left-[50%] top-[40%] w-[3px] md:w-[0.25vw] h-[25%] bg-white opacity-90" />
          <div className="absolute left-[53%] top-[25%] w-[4px] md:w-[0.35vw] h-[60%] bg-[#ff1f35]" />
          <div className="absolute left-[56%] top-[65%] w-[3px] md:w-[0.25vw] h-[20%] bg-white opacity-80" />

          {/* Center-Right Zone */}
          <div className="absolute left-[59%] top-[10%] w-[5px] md:w-[0.45vw] h-[48%] bg-[#ff1f35]" />
          <div className="absolute left-[62%] top-[50%] w-[3px] md:w-[0.25vw] h-[30%] bg-white" />
          <div className="absolute left-[65%] top-[0%] w-[4px] md:w-[0.35vw] h-[65%] bg-[#ff1f35]" />
          <div className="absolute left-[68%] top-[45%] w-[2px] md:w-[0.2vw] h-[32%] bg-white opacity-85" />
          <div className="absolute left-[71%] top-[20%] w-[5px] md:w-[0.45vw] h-[50%] bg-[#ff1f35]" />
          <div className="absolute left-[74%] top-[60%] w-[3px] md:w-[0.25vw] h-[24%] bg-white" />

          {/* Right / Bottom-Right Zone */}
          <div className="absolute left-[77%] top-[5%] w-[4px] md:w-[0.35vw] h-[58%] bg-[#ff1f35]" />
          <div className="absolute left-[80%] top-[40%] w-[3px] md:w-[0.25vw] h-[35%] bg-white opacity-90" />
          <div className="absolute left-[83%] top-[15%] w-[5px] md:w-[0.45vw] h-[45%] bg-[#ff1f35]" />
          <div className="absolute left-[86%] top-[55%] w-[3px] md:w-[0.25vw] h-[28%] bg-white" />
          <div className="absolute left-[89%] top-[0%] w-[4px] md:w-[0.35vw] h-[52%] bg-[#ff1f35]" />
          <div className="absolute left-[92%] top-[45%] w-[2px] md:w-[0.2vw] h-[35%] bg-white opacity-80" />
          <div className="absolute left-[95%] top-[10%] w-[5px] md:w-[0.45vw] h-[60%] bg-[#ff1f35]" />

          {/* ================= SQUARE DOTS ================= */}
          <div className="absolute left-[9%] top-[35%] w-[12px] h-[12px] bg-[#ff1f35]" />
          <div className="absolute left-[15%] top-[70%] w-[10px] h-[10px] bg-white opacity-90" />
          <div className="absolute left-[22%] top-[25%] w-[14px] h-[14px] bg-[#ff1f35]" />
          <div className="absolute left-[28%] top-[80%] w-[10px] h-[10px] bg-white" />
          <div className="absolute left-[34%] top-[38%] w-[12px] h-[12px] bg-[#ff1f35]" />
          <div className="absolute left-[40%] top-[15%] w-[10px] h-[10px] bg-white opacity-90" />
          <div className="absolute left-[45%] top-[72%] w-[14px] h-[14px] bg-[#ff1f35]" />
          <div className="absolute left-[52%] top-[30%] w-[12px] h-[12px] bg-white" />
          <div className="absolute left-[58%] top-[82%] w-[10px] h-[10px] bg-[#ff1f35]" />
          <div className="absolute left-[64%] top-[20%] w-[14px] h-[14px] bg-[#ff1f35]" />
          <div className="absolute left-[70%] top-[65%] w-[10px] h-[10px] bg-white opacity-90" />
          <div className="absolute left-[76%] top-[30%] w-[12px] h-[12px] bg-[#ff1f35]" />
          <div className="absolute left-[82%] top-[78%] w-[10px] h-[10px] bg-white" />
          <div className="absolute left-[88%] top-[22%] w-[12px] h-[12px] bg-[#ff1f35]" />
          <div className="absolute left-[94%] top-[68%] w-[10px] h-[10px] bg-white opacity-90" />
        </div>
      </div>
    </div>
  );
}