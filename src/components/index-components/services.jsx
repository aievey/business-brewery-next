import {
  Segment,
  Large,
  Small,
  Head,
  Elaboration,
} from "@/components/ui/segment";
import {
  Blocks,
  CircleCheckBig,
  ChartNoAxesCombined,
  Timer,
  Search,
} from "lucide-react";
import Button from "../ui/button";
import Link from "next/link";

const servicesList = [
  {
    id: 1,
    name: "Cusomize",
    icon: Blocks,
    iconColour: "text-purple-400",
  },
  {
    id: 2,
    name: "SEO",
    icon: Search,
    iconColour: "text-green-400",
  },
  {
    id: 3,
    name: "Fast Load",
    icon: Timer,
    iconColour: "text-yellow-400",
  },
  {
    id: 4,
    name: "Scale",
    icon: ChartNoAxesCombined,
    iconColour: "text-blue-400",
  },
];

const Services = () => {
  return (
    <Segment>
      <Small>
        <div className="relative text-stone-500">
          <div className="absolute -top-20 -left-20 -z-10 size-50 animate-pulse rounded-full bg-blue-500/60 blur-3xl delay-75"></div>
          <div className="absolute -right-10 bottom-0 -z-10 size-25 animate-pulse rounded-full bg-pink-600/70 blur-3xl"></div>
          {servicesList.map((service) => (
            <div key={service.id} className="my-4 flex items-center">
              <service.icon className={`p-1 ${service.iconColour}`} size={40} />
              <h3 className="w-full rounded-2xl bg-white px-3 text-lg font-semibold tracking-wide shadow">
                {service.name}
              </h3>

              <CircleCheckBig
                className="absolute right-4 rounded-3xl text-green-500 lg:right-8"
                size={40}
              />
            </div>
          ))}
        </div>
      </Small>
      <Large>
        <Head>
          Starting new, looking where to start or dealing with slow websites?
        </Head>
        <Elaboration>
          <b>We offer solutions for exactly the same.</b> <br />
          Scalable, Lightning fast, Discoverable and secure websites build with
          bleeding edge technology to outshine your competition. <br />
          <p className="py-4 text-amber-400 italic">
            Growth + performance that is what we deliver!
          </p>
        </Elaboration>
        <div className="flex items-center justify-start gap-4 pt-6">
          <Link href="/package">
            <Button width="w-35" accent>
              Learn more
            </Button>
          </Link>
          <Link href="/contact">
            <Button width="w-35">Get started</Button>
          </Link>
        </div>
      </Large>
    </Segment>
  );
};

export default Services;
