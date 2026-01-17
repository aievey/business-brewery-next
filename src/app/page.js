import Cover from "@/components/cover";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Cover />
      <div className="mr-auto ml-auto flex h-60 w-full max-w-8/10 flex-col items-center justify-center rounded-2xl bg-gray-400">
        <h2>Trust Signal</h2>
        <ul className="flex flex-wrap">
          <li> Company1 LOGO</li>
          <li> Company2 LOGO</li>
          <li> Company3 LOGO</li>
        </ul>
      </div>
      <div className="mr-auto ml-auto flex min-h-60 w-full max-w-8/10 flex-col justify-center gap-6 rounded-2xl bg-gray-400">
        <h2>What We do.</h2>
        <p>
          Tired of [Common Client Pain Point: clunky software, slow websites]?
        </p>
        <ul className="">
          <li> Icon/Graphic for each.</li>
          <li> Service Title: Custom Web Development</li>
          <li>
            {" "}
            Brief Benefit: Scalable, secure websites built for growth and
            performance.
          </li>
          <li>
            {" "}
            Link: Learn More links to a dedicated service page or case study.
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <b>The Results We Deliver</b>
        </li>
        <li>
          Project Image/Screenshot. Client Name & Project Type: E-Commerce
          Platform for Brand X <br />
          Brief Challenge & Solution: 1-2 sentences. <br />
          Key Result/Outcome: Result: 75% faster load time, 30% more sales.{" "}
          <br />
          CTA: "View Full Case Study"
        </li>
      </ul>
      <ul>
        <li>
          <b>A Clear, Collaborative Process</b>
        </li>
        <li>
          Discover: Strategy & Planning Design: UX/UI Mockups <br />
          Develop: Build & Test <br />
          Deliver: Launch & Support
        </li>
      </ul>
      <h2>
        <b>About me</b>
      </h2>
      <div>
        <h2>
          <b>Ready to Build Your Solution?</b>
        </h2>
        <h3>
          Let&apos;s discuss your project. No obligation, just a conversation.
        </h3>
        <Link href="/about">Schedule your free site inspection.</Link>
        <Link href="/">Let&apos;s start from scratch.</Link>
      </div>
    </div>
  );
}
