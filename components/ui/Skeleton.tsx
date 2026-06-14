// Reusable skeleton primitives — shimmer animation via CSS
// No dependencies, pure Tailwind

const shimmer = "animate-pulse bg-white/[0.06] rounded-lg";

/** A single line of text skeleton */
export function SkeletonLine({ width = "w-full", height = "h-4" }: { width?: string; height?: string }) {
  return <div className={`${shimmer} ${width} ${height}`} />;
}

/** Skeleton for the About section */
export function AboutSkeleton() {
  return (
    <div className="py-20 w-full">
      {/* label */}
      <div className={`${shimmer} w-24 h-3 mb-4`} />
      {/* headline */}
      <div className={`${shimmer} w-80 h-10 mb-16`} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* left col */}
        <div className="flex flex-col gap-4">
          <div className={`${shimmer} w-full h-5`} />
          <div className={`${shimmer} w-5/6 h-5`} />
          <div className={`${shimmer} w-full h-5`} />
          <div className={`${shimmer} w-4/6 h-5`} />
          <div className={`${shimmer} w-full h-5 mt-4`} />
          <div className={`${shimmer} w-3/6 h-5`} />
          <div className="flex gap-4 mt-4">
            <div className={`${shimmer} w-52 h-8`} />
            <div className={`${shimmer} w-28 h-8`} />
          </div>
        </div>
        {/* right col */}
        <div className="flex flex-col gap-6">
          <div className={`${shimmer} w-32 h-3`} />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`${shimmer} h-7`} />
            ))}
          </div>
          <div className="flex gap-8 pt-4 border-t border-white/[0.04]">
            <div className={`${shimmer} w-20 h-12`} />
            <div className={`${shimmer} w-20 h-12`} />
            <div className={`${shimmer} w-20 h-12`} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Skeleton for the Experience section */
export function ExperienceSkeleton() {
  return (
    <div className="py-20 w-full">
      <div className={`${shimmer} w-24 h-3 mb-4`} />
      <div className={`${shimmer} w-56 h-10 mb-16`} />
      <div className="flex flex-col divide-y divide-white/[0.04]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
            <div className="flex flex-col gap-3">
              <div className={`${shimmer} w-20 h-5`} />
              <div className={`${shimmer} w-40 h-6`} />
              <div className={`${shimmer} w-32 h-4`} />
            </div>
            <div className="flex flex-col gap-2 self-center">
              <div className={`${shimmer} w-full h-4`} />
              <div className={`${shimmer} w-5/6 h-4`} />
              <div className={`${shimmer} w-full h-4`} />
              <div className={`${shimmer} w-3/4 h-4`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Skeleton for the Skills / IconCloud section */
export function SkillsSkeleton() {
  return (
    <div className="my-10 py-10">
      <div className={`${shimmer} w-64 h-10 mx-auto mb-6`} />
      {/* Simulate the cloud sphere */}
      <div className="flex flex-wrap justify-center gap-3 px-4 h-[320px] md:h-[420px] items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`${shimmer} rounded-full`}
            style={{ width: `${40 + (i % 5) * 8}px`, height: `${40 + (i % 5) * 8}px` }}
          />
        ))}
      </div>
    </div>
  );
}

/** Skeleton for a row of project cards */
export function ProjectsSkeleton() {
  return (
    <div className="py-10">
      <div className={`${shimmer} w-72 h-10 mx-auto mb-4`} />
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-12 p-4 mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[80vw] sm:w-[570px] flex flex-col gap-3">
            <div className={`${shimmer} w-full h-48 sm:h-56 rounded-2xl`} />
            <div className={`${shimmer} w-48 h-6`} />
            <div className={`${shimmer} w-full h-4`} />
            <div className={`${shimmer} w-5/6 h-4`} />
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className={`${shimmer} w-8 h-8 rounded-full`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Skeleton for testimonials */
export function TestimonialsSkeleton() {
  return (
    <div className="py-20">
      <div className={`${shimmer} w-64 h-10 mx-auto mb-12`} />
      <div className="flex gap-6 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`${shimmer} min-w-[300px] h-48 rounded-2xl flex-shrink-0`} />
        ))}
      </div>
    </div>
  );
}
