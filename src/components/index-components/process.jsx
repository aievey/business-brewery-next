import {
  Head,
  Segment,
  Large,
  Small,
  Elaboration,
} from "@/components/ui/segment";
import {
  SearchCheck,
  LayoutDashboard,
  FileCodeCorner,
  PackageCheck,
} from "lucide-react";
import Link from "next/link";

const process = [
  {
    id: 1,
    title: "Discovery",
    description: "Strategy & Planning",
    icon: SearchCheck,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Design",
    description: "UX/UI Mockups",
    icon: LayoutDashboard,
    color: "text-yellow-400",
  },
  {
    id: 3,
    title: "Develop",
    description: "Build & Test ",
    icon: FileCodeCorner,
    color: "text-stone-600",
  },
  {
    id: 4,
    title: "Deliver",
    description: "Launch & Support",
    icon: PackageCheck,
    color: "text-yellow-600",
  },
];
const Process = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-2xl bg-linear-to-b from-amber-100 to-amber-300 duration-200 md:shadow xl:py-20">
      <div className="flex flex-wrap justify-center gap-4 xl:gap-10">
        <div className="flex flex-col space-y-4 py-5">
          {process.map((step) => (
            <div key={step.id} className="flex items-center justify-center">
              <step.icon
                size={52}
                className={`mr-5 rounded-xl bg-stone-100 p-1 shadow ${step.color}`}
              />
              <div className="min-w-50 rounded-xl bg-stone-100 px-4 py-0.5 shadow">
                <h3 className="text-lg font-semibold tracking-wide text-stone-700">
                  {step.title}
                </h3>
                <p className="text-sm font-extralight text-stone-600 italic">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-100 p-4">
          <Head className="py-4 text-center text-2xl font-semibold tracking-wide text-stone-600">
            A Clear, Collaborative Process
          </Head>
          <Elaboration>
            Building a great website shouldn&apos;t feel chaotic. We follow a
            proven, collaborative process that ensures your project stays on
            track, on budget, and delivers exactly what you need.
            <br />
            <Link href="/how-it-works" className="font-semibold text-blue-500">
              Here&apos;s exactly how we&apos;ll work together.
            </Link>
          </Elaboration>
        </div>
      </div>
    </div>
  );
};
export default Process;
