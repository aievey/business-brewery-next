import Cover from "@/components/index-components/cover";
import Services from "@/components/index-components/services";

import Link from "next/link";
import PageContainer from "@/components/page-container";
import Display from "@/components/index-components/brand-logo-container";
import SubForm from "@/components/ui/sub-form";
import {
  Head,
  Segment,
  Large,
  Small,
  Elaboration,
} from "@/components/ui/segment";
import Process from "@/components/index-components/process";

export default function Home() {
  return (
    <div className="">
      <div className="mb-15 flex justify-center md:mb-8">
        <Cover />
      </div>
      <PageContainer>
        {/* Brand Logos */}
        <Display />
        <Services />

        <Segment>
          <Small>
            <Head>The Results We Deliver</Head>
          </Small>
          <Large>
            <Elaboration>
              Project Image/Screenshot. Client Name & Project Type: E-Commerce
              Platform for Brand X <br />
              Brief Challenge & Solution: 1-2 sentences. <br />
              Key Result/Outcome: Result: 75% faster load time, 30% more sales.{" "}
              <br />
              CTA: "View Full Case Study"
            </Elaboration>
          </Large>
        </Segment>
        <Process />

        {/* <Segment>
          <Small>
            <Head>
              <b>About me</b>
            </Head>
          </Small>
          <Large>
            <Elaboration>ok</Elaboration>
          </Large>
        </Segment> */}

        <Segment>
          <Large>
            <div className="flex h-full flex-col items-center justify-center">
              <Head>Ready to Build Your Solution?</Head>
              <Elaboration>
                <p className="max-w-85">
                  Let&apos;s discuss your project. No obligation, just a
                  conversation. Schedule your free site inspection or
                  <Link href="/contact" className="text-blue-500">
                    {" "}
                    let&apos;s start from scratch.
                  </Link>
                </p>
              </Elaboration>
            </div>
          </Large>
          <Small>
            <SubForm />
          </Small>
        </Segment>
      </PageContainer>
    </div>
  );
}
