import PageContainer from "@/components/ui/page-container";
import SubCover from "@/components/ui/sub-cover";

export const metadata = {
  title: "Contact",
  description: "Communication is the key.",
};
const Contact = () => {
  return (
    <PageContainer>
      {" "}
      <SubCover url="/contact-us.jpg">Connect</SubCover> <h1>Contact</h1>{" "}
    </PageContainer>
  );
};
export default Contact;
