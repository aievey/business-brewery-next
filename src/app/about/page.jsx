const About = () => {
  return (
    <div>
      Cover{" "}
      <ul>
        <li>
          <b>Headline: </b>More Than Code: Building Partnerships for Digital
          Success.
        </li>
        <li>
          <b>SubHead:</b> We&apos;re a team of strategists and developers
          passionate about turning your business challenges into powerful web
          solutions.
        </li>
        <li>
          <b>How we work</b>{" "}
          <ul className="ml-5 divide-y divide-dotted">
            <li>
              Partnership Over Transaction: "We see ourselves as an extension of
              your team."
            </li>
            <li>
              Clarity & Communication: "No jargon, just clear updates and honest
              timelines.
            </li>
            <li>
              Future-Proof Solutions: "We build for tomorrow, not just for
              today."
            </li>
            <li>
              Quality in the Details: "From code to customer experience, we
              sweat the small stuff."
            </li>
          </ul>
        </li>
        <li>
          <b>The Minds Behind the Work</b> <br />
          <div className="border p-4">
            <b>A professional but approachable headshot.</b>
            <br />

            <div>
              Name & Title.
              <br />
              Brief Bio: Focus on expertise, passion, and how they help clients.
              Include a fun, humanizing fact e.g., "Coffee enthusiast, mountain
              biker, and detail-obsessed problem-solver.".
            </div>
          </div>
        </li>
        <li>
          <b>What makes us diffeent?</b> <br />
          We Focus on Your Business Goals, not just technical specs.
          <br /> You Work Directly With the Experts, not an account manager.{" "}
          <br /> We Champion Your Ongoing Success with clear support options.
        </li>
        <li>
          <b>Testimonials</b>
        </li>
        <li>
          <b>Have a project in mind?</b>
          <br />
          <h2>Let&apos;s combine your vision with our expertise</h2>
          <button>Speak to us</button>
          <button>Services</button>
        </li>
      </ul>
    </div>
  );
};
export default About;
