import { Headset, PencilLine, CodeXml, ScanSearch, Rocket } from "lucide-react";

const processSteps = [
  {
    id: "s1",
    icon: Headset,
    title: "Discovery & Strategy",
    description:
      "We start with a conversation. I'll learn about your business, goals, target audience, and vision for the project.",
    process: [
      { id: "s1p1", item: "Free initial consultation call (30-45 mins)" },
      { id: "s1p2", item: "Deep dive into your needs and expectations" },
      {
        id: "s1p3",
        item: "Discussion of timeline, budget, and technical requirements",
      },
    ],
    deliverable: "A clear project proposal and scope document for your review.",
  },
  {
    id: "s2",
    icon: PencilLine,
    title: "Visualizing Your Vision",
    description:
      "I create the visual foundation for your website based on our strategy session.",
    process: [
      { id: "s2p1", item: "Creation of a sitemap (website structure)" },
      { id: "s2p2", item: "Design of wireframes (layout sketches)" },
      {
        id: "s2p3",
        item: "Development of 1-2 homepage mockups for your feedback",
      },
      { id: "s2p4", item: "Selection of colors, fonts, and visual style" },
    ],
    deliverable:
      "Approved visual mockups and a complete site plan to guide development.",
  },
  {
    id: "s3",
    icon: CodeXml,
    title: "Bringing It to Life",
    description:
      "I transform the approved designs into a fully functional website.",
    process: [
      { id: "s3p1", item: "Setting up the development environment" },
      { id: "s3p2", item: "Building pages with responsive, clean code" },
      {
        id: "s3p3",
        item: "Integrating necessary features (contact forms, galleries, etc.)",
      },
      { id: "s3p4", item: "Initial content population" },
    ],
    deliverable: "A working website in a private staging area for your review.",
  },
  {
    id: "s4",
    icon: ScanSearch,
    title: "Your Feedback, Implemented",
    description:
      "You test the website thoroughly and provide feedback for final adjustments.",
    process: [
      { id: "s4p1", item: "You receive login access to the staging site" },
      {
        id: "s4p2",
        item: "You test on different devices (phone, tablet, desktop)",
      },
      { id: "s4p3", item: "You provide organized feedback" },
      {
        id: "s4p4",
        item: "I implement agreed-upon revisions (number based on your package)",
      },
    ],
    deliverable: "A polished, approved website ready for launch.",
  },
  {
    id: "last",
    icon: Rocket,
    title: "Going Live & Beyond",
    description:
      "We launch your website to the world and ensure everything runs smoothly.",
    process: [
      { id: "s5p1", item: "Final quality check and speed optimization" },
      { id: "s5p2", item: "Domain and hosting configuration" },
      { id: "s5p3", item: "Official launch to your live server" },
      { id: "s5p4", item: "Basic SEO setup" },
      { id: "s5p5", item: "Post-launch training session" },
    ],
    deliverable: "Your live website + documentation + 1month(s) of support.",
  },
  // {
  //   id: "",
  //   icon: "",
  //   title: "",
  //   description: "",
  //   process: [{ id: "", item: "" }],
  //   deliverable: "",
  // },
];

const faqs = [
  {
    id: "faq1",
    q: "How long does a typical website project take?",
    a: "Depending on complexity, most projects take 3-6 weeks from start to launch. We'll provide a detailed timeline in your proposal.",
  },
  {
    id: "faq2",
    q: "How involved do I need to be?",
    a: "Your input is crucial in Steps 1, 2, and 4. Expect to spend 1-2 hours per week on feedback and content. I handle the technical heavy lifting.",
  },
  {
    id: "faq3",
    q: "What do I need to prepare before we start?",
    a: "Your brand assets (logo, colors), website content (text, images), and clear goals. Don't worry—I'll provide a complete checklist!",
  },
  {
    id: "faq4",
    q: "What happens after launch?",
    a: "All projects include 1 month(s) of post-launch support for minor fixes. For ongoing updates, we offer flexible retainer plans.",
  },
];

export { faqs, processSteps };
