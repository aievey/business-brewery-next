import PageContainer from "@/components/ui/page-container";
import SubCover from "@/components/ui/sub-cover";

export const metadata = {
  title: "Packages",
  description: "Range of Packages as pwer your requirements",
};
const Package = () => {
  return (
    <PageContainer>
      {" "}
      <SubCover url="/packages-cover.jpg">Values</SubCover> <h1>Package</h1>
    </PageContainer>
  );
};
export default Package;
