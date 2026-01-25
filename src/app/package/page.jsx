import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
import PackageCard from "@/components/package-components/package-card";
import { packages, addons } from "@/lib/packages";
import AddOn from "@/components/package-components/addon";
export const metadata = {
  title: "Packages",
  description: "Range of Packages as pwer your requirements",
};
const Package = () => {
  // console.log(packages);
  return (
    <PageContainer>
      <SubCover url="/packages-cover.jpg">Values</SubCover> <h1>Package</h1>
      <div className="flex flex-wrap gap-10">
        {packages.map((offer) => (
          <PackageCard offer={offer} key={offer.id} />
        ))}
        <AddOn list={addons} />
      </div>
    </PageContainer>
  );
};
export default Package;
