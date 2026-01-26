import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";

export const metadata = {
  title: "How it works",
  description:
    "Know before you put your hard earned money. We value your efforts!",
};
const Process = () => {
  return (
    <PageContainer>
      <SubCover url="/process-cover.jpg"> Process</SubCover>
      <h1>How it works</h1>
      <div className="flex w-full flex-col items-start">
        <div className="group flex gap-x-6">
          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-amber-200"></div>
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-amber-400 text-stone-700"></span>
          </div>
          <div className="-translate-y-1.5 pt-2 pb-8">
            <h2 className="text-2xl font-semibold text-stone-700">
              Timeline Title Here.
            </h2>
            <p className="mt-2 text-lg font-light text-stone-700">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&#x27;m never giving up,
              I&#x27;m just getting started. I&#x27;m up to something. Fan luv.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default Process;
