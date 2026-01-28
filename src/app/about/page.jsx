import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
import SubForm from "@/components/ui/sub-form";
import Image from "next/image";
import Button from "@/components/ui/button";
import People from "@/components/carousel";
import {
  Segment,
  Large,
  Small,
  Head,
  Elaboration,
} from "@/components/ui/segment";

export const metadata = {
  title: "About us",
  description: "Who are we? What we do? Know about us.",
};
const About = () => {
  const newLocal = "rounded-2xl bg-amber-400 p-4 shadow";
  return (
    <PageContainer>
      <SubCover url="/about-us-cover.jpg">About us</SubCover>

      <Segment>
        <Small>
          <Head>
            More Than Code: Building Partnerships for Digital Success.
          </Head>
          <Elaboration>
            We&apos;re a team of strategists and developers passionate about
            turning your business challenges into powerful web solutions.
          </Elaboration>
        </Small>
        <Large>
          <Head>How we work</Head>
          <Elaboration>
            <ul className="space-y-4">
              <li className={newLocal}>
                <b>Partnership Over Transaction.</b> <br />
                <span className="italic">
                  We see ourselves as an extension of your team.
                </span>
              </li>
              <li className="rounded-2xl bg-amber-400 p-4 shadow">
                <b>Clarity & Communication.</b> <br />
                <span className="italic">
                  No jargon, just clear updates and honest timelines.
                </span>
              </li>
              <li className="rounded-2xl bg-amber-400 p-4 shadow">
                <b>Future-Proof Solutions.</b> <br />
                <span className="italic">
                  We build for tomorrow, not just for today.
                </span>
              </li>
              <li className="rounded-2xl bg-amber-400 p-4 shadow">
                <b>Quality in the Details.</b> <br />
                <span className="italic">
                  From code to customer experience, we sweat the small stuff.
                </span>
              </li>
            </ul>
          </Elaboration>
        </Large>
      </Segment>

      <Segment>
        <Large>
          <Head>The Minds Behind the Work</Head>

          <div className="">
            <People />
          </div>
        </Large>
        <Small>
          <Head>What makes us different?</Head>
          <Elaboration>
            We Focus on Your Business Goals, not just technical specs.
            <br /> You Work Directly With the Experts, not an account manager.{" "}
            <br /> We Champion Your Ongoing Success with clear support options.
          </Elaboration>
        </Small>
      </Segment>

      <div className="border border-red-500">
        {" "}
        <b>component required</b> <br />
        Testimonials
      </div>
      <Segment>
        <Large>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Head>Have a project in mind?</Head>
            <Elaboration>
              Let&apos;s combine your vision with our expertise
            </Elaboration>
          </div>
        </Large>
        <Small>
          <SubForm />
        </Small>
      </Segment>
    </PageContainer>
  );
};
export default About;
