import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
import PackageCard from "@/components/package-components/package-card";
import { packages, addons } from "@/lib/packages";
import AddOn from "@/components/package-components/addon";
import { Head, Elaboration } from "@/components/ui/segment";
export const metadata = {
  title: "Packages",
  description: "Range of Packages as pwer your requirements",
};
const Package = () => {
  // console.log(packages);
  return (
    <PageContainer>
      <SubCover url="/packages-cover.jpg">Value</SubCover>
      <div className="text-center">
        <Head>Website Packages</Head>
        <Elaboration>
          <b>Note:</b> All packages include responsive design (mobile-friendly),
          basic SEO setup, and 1-month of post-launch bug fixes.
        </Elaboration>
      </div>
      <div className="flex flex-wrap items-start justify-evenly space-y-10">
        {packages.map((offer) => (
          <PackageCard offer={offer} key={offer.id} />
        ))}
        <AddOn list={addons} />
      </div>
    </PageContainer>
  );
};
export default Package;
