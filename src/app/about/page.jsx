import PageContainer from "@/components/page-container";
import SubCover from "@/components/sub-cover";
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
            <ul className="ml-4 space-y-4">
              <li>
                <b>Partnership Over Transaction:</b> <br />
                We see ourselves as an extension of your team.
              </li>
              <li>
                <b>Clarity & Communication:</b> <br />
                No jargon, just clear updates and honest timelines.
              </li>
              <li>
                <b>Future-Proof Solutions:</b> <br />
                We build for tomorrow, not just for today.
              </li>
              <li>
                <b>Quality in the Details:</b> <br />
                From code to customer experience, we sweat the small stuff.
              </li>
            </ul>
          </Elaboration>
        </Large>
      </Segment>

      <Segment>
        <Large>
          <Head>The Minds Behind the Work</Head>

          <div className="border border-red-500">
            <b>Member component required!</b> <br />
            A professional but approachable headshot.
            <br />
            Name & Title. Brief Bio: Focus on expertise, passion, and how they
            help clients. Include a fun, humanizing fact e.g., <br />
            Coffee enthusiast, mountain biker, and detail-obsessed
            problem-solver.
          </div>
        </Large>
        <Small>
          <Head>What makes us diffeent?</Head>
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

      <b>Have a project in mind?</b>
      <br />
      <h2>Let&apos;s combine your vision with our expertise</h2>
      <button>Speak to us</button>
      <button>Services</button>
    </PageContainer>
  );
};
export default About;
