import Image from "next/image";
const logos = [
  {
    id: 1,
    name: "Javascript logo",
    url: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    id: 2,
    name: "Next Js",
    url: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    id: 3,
    name: "Postgres",
    url: "https://cdn.worldvectorlogo.com/logos/postgresql-inc.svg",
  },
  {
    id: 4,
    name: "React",
    url: "https://cdn.worldvectorlogo.com/logos/create-react-app.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    id: 6,
    name: "Python",
    url: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    id: 7,
    name: "CSS",
    url: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    id: 8,
    name: "HTML",
    url: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    id: 9,
    name: "HTML",
    url: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
  },
];
const Display = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 py-6 md:gap-10 md:py-20">
      {logos.map((logo) => (
        <div key={logo.id} className="relative size-14 md:min-h-32 md:min-w-32">
          <Image
            src={logo.url}
            fill
            className="object-contain"
            alt={`business brewery ${logo.name} skill`}
          />
        </div>
      ))}
    </div>
  );
};
export default Display;
