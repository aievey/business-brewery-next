import { Segment, Large, Small } from "@/components/ui/segment";
import {
  SearchCheck,
  LayoutDashboard,
  FileCodeCorner,
  PackageCheck,
} from "lucide-react";

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
    <Segment>
      <Large>
        <h1 className="py-4 text-center text-2xl font-semibold tracking-wide text-stone-600">
          A Clear, Collaborative Process
        </h1>
      </Large>
      <Small>
        <div className="flex flex-col space-y-4 py-5">
          {process.map((step) => (
            <div key={step.id} className="flex items-center justify-center">
              <step.icon
                size={52}
                className={`mr-5 rounded-xl bg-stone-50 p-1 ${step.color}`}
              />
              <div className="min-w-50 rounded-xl bg-stone-50 px-4 py-0.5">
                <h3 className="text-lg font-semibold tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm font-extralight italic">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Small>
    </Segment>
  );
};
export default Process;
