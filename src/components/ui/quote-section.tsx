"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function Quote() {
  return (
    <section className="flex w-full justify-center bg-transparent py-24">
      <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
        <div className="relative flex flex-col items-center border border-[#EBB000]/50 bg-black/40 backdrop-blur-md">
          <DotPattern width={20} height={20} className="opacity-30" />

          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-[#EBB000] text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-[#EBB000] text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-[#EBB000] text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-[#EBB000] text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20">
            <p className="md:text-md text-xs text-[#EBB000] lg:text-lg xl:text-2xl drop-shadow-md">
              I believe
            </p>
            <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl text-foreground drop-shadow-lg">
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <h1 className="font-semibold">"Design should be</h1>
                <p className="font-thin text-foreground/80">easy to</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin text-foreground/80">understand</p>
                <h1 className="font-semibold">because</h1>
                <p className="font-thin text-foreground/80">simple</p>
              </div>
              <div className="flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <p className="font-thin text-foreground/80">ideas</p>
                <h1 className="font-semibold">are quicker to</h1>
              </div>
              <h1 className="font-semibold">grasp..."</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
