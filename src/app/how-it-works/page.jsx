import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
import { Elaboration, Head } from "@/components/ui/segment";
import QnA from "@/components/ui/accordion";
import { processSteps } from "@/lib/process";

export const metadata = {
  title: "How it works",
  description:
    "Know before you put your hard earned money. We value your efforts!",
};

const Timeline = () => {
  return (
    <div className="flex w-full flex-col items-start">
      {processSteps.map((step) => (
        <div className="group flex gap-x-6" key={step.id}>
          <div className="relative">
            {step.id === "last" ? (
              ""
            ) : (
              <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-amber-200"></div>
            )}
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-white">
              <step.icon />
            </span>
          </div>
          <div className="-translate-y-1.5 pt-2 pb-8 text-stone-700">
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <div className="text-lg font-light text-stone-600">
              <p className="mt-2 italic">{step.description}</p>
              <ul className="list-disc pl-4">
                {step.process.map((p) => (
                  <li key={p.id}>{p.item}</li>
                ))}
              </ul>
              <h3 className="font-semibold text-stone-700">Deliverable:</h3>
              <p className="ml-4">{step.deliverable}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Process = () => {
  return (
    <PageContainer>
      <SubCover url="/process-cover.jpg"> Process</SubCover>
      <div className="py-10 text-center">
        <Head>How We Work or Our Process</Head>
        <Elaboration>
          A clear, step-by-step roadmap from idea to launch. No surprises, just
          results.
        </Elaboration>
      </div>
      <Timeline />
      <QnA />
    </PageContainer>
  );
};
export default Process;
