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
    </PageContainer>
  );
};
export default Process;
