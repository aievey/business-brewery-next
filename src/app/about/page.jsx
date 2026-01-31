import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
import SubForm from "@/components/ui/sub-form";
import Image from "next/image";
import Button from "@/components/ui/button";
import People from "@/components/members";
import {
  Segment,
  Large,
  Small,
  Head,
  Elaboration,
} from "@/components/ui/segment";

const howWeWork = [
  {
    id: 1,
    title: "Partnership Over Transaction.",
    description: "We see ourselves as an extension of your team.",
  },
  {
    id: 2,
    title: "Clarity & Communication.",
    description: "No jargon, just clear updates and honest timelines.",
  },
  {
    id: 3,
    title: "Future-Proof Solutions.",
    description: "We build for tomorrow, not just for today.",
  },
  {
    id: 4,
    title: "Quality in the Details.",
    description: "From code to customer experience, we sweat the small stuff.",
  },
];

export const metadata = {
  title: "About us",
  description: "Who are we? What we do? Know about us.",
};
const About = () => {
  const newLocal = "rounded-2xl bg-amber-200 p-4 shadow";
  return (
    <PageContainer>
      <SubCover url="/about-us-cover.jpg">About us</SubCover>

      <Segment>
        <Small>
          <div className="md:p-10">
            <Head>
              More Than Code: Building Partnerships for Digital Success.
            </Head>
            <Elaboration>
              We&apos;re a team of strategists and developers passionate about
              turning your business challenges into powerful web solutions.
            </Elaboration>
          </div>
        </Small>
        <Large>
          <Head>How we work</Head>
          <Elaboration>
            <ul className="space-y-4">
              {howWeWork.map((point) => (
                <li key={point.id} className={newLocal}>
                  <b>{point.title}</b> <br />
                  <span className="italic">{point.description}</span>
                </li>
              ))}
            </ul>
          </Elaboration>
        </Large>
      </Segment>

      <Segment>
        <Large>
          <Head>The Minds Behind the Work</Head>

          <People />
        </Large>
        <Small>
          <div className="md:p-10">
            <Head>What makes us different?</Head>
            <Elaboration>
              We Focus on Your Business Goals, not just technical specs.
              <br /> You Work Directly With the Experts, not an account manager.{" "}
              <br /> We Champion Your Ongoing Success with clear support
              options.
            </Elaboration>
          </div>
        </Small>
      </Segment>

      {/* <div className="border border-red-500">
        {" "}
        <b>component required</b> <br />
        Testimonials
      </div> */}
      <Segment>
        <div className="flex h-full w-full flex-col items-center justify-center py-20">
          <Head>Have a project in mind?</Head>
          <Elaboration>
            Let&apos;s combine your vision with our expertise
          </Elaboration>
          <div className="flex h-30 items-center justify-center">
            <Button type="submit" width="w-60">
              Get My Free Quote & Plan
            </Button>
          </div>
        </div>
      </Segment>
    </PageContainer>
  );
};
export default About;
