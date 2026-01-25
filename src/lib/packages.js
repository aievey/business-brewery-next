const packages = [
  {
    id: "Package 1:",
    title: 'The "Get Started" Site',
    description:
      "A freelancer, artist, local shop, or simple service business that just needs an online brochure.",
    priceRange: "$800 - $1,500",
    timeLine: "1-2 Weeks",
    deliverable: [
      {
        id: "p1d1",
        content:
          "A clean, modern 3-Page Website (Home, About, Contact) using a premium WordPress theme or a simple HTML/CSS template.",
      },
      {
        id: "p1d2",
        content:
          "Customization: You'll customize the theme/template with the client's logo, colors, fonts, and content.",
      },
      {
        id: "p1d3",
        content: "Contact Form: A simple form that emails them leads.",
      },
      {
        id: "p1d4",
        content:
          "Basic Setup: Connect their custom domain, set up hosting (you can use a simple reseller account or guide them).",
      },
      {
        id: "p1d5",
        content: "1 Round of Revisions on the homepage design before building.",
      },
      {
        id: "p1d6",
        content: "1 Round of Revisions on the homepage design before building.",
      },
      {
        id: "p1d7",
        content:
          "1-Hour Training Session via Zoom on how to log in and update basic text/images.",
      },
    ],
    nonDeliverable: [
      {
        id: "p1nd1",
        content:
          "No custom graphics or illustrations (you'll use stock images they provide/license).",
      },
      {
        id: "p1nd2",
        content: "No e-commerce, memberships, or logins.",
      },
      {
        id: "p1nd3",
        content: "No custom functionality beyond the contact form.",
      },
      {
        id: "p1nd4",
        content: "No blog setup (unless it's a one-click theme feature).",
      },
      {
        id: "p1nd5",
        content: "No ongoing updates or content changes after launch.",
      },
    ],
  },
  {
    id: "Package 2:",
    title: 'The "Business-Grade" Website',
    description:
      "A growing business that needs more pages, a portfolio, and a blog to attract customers.",
    priceRange: "$1,800 - $3,500",
    timeLine: "3-4 Weeks",
    deliverable: [
      {
        id: "p2d1",
        content:
          "A more customized Up to 7-Page Website (Home, About, Services, Portfolio/Gallery, Blog, Contact, FAQ) using a flexible page-builder theme (like Astra + Elementor, GeneratePress) or a more advanced template.",
      },
      {
        id: "p2d2",
        content:
          "Custom Design within a Framework: You'll do more than just change colors; you'll significantly rearrange layouts and components to match a provided design or your mockup.",
      },
      {
        id: "p2d3",
        content: "Portfolio/Gallery: A nice-looking display for their work.",
      },
      {
        id: "p2d4",
        content:
          "Blog Setup: Categories, initial formatting, and a nice layout.",
      },
      {
        id: "p2d5",
        content:
          "Advanced Contact Form: Possibly with fields for service inquiries or file upload.",
      },
      {
        id: "p2d6",
        content:
          "Basic Speed Optimization: Image compression, caching plugin setup.",
      },
      {
        id: "p2d7",
        content: "2 Rounds of Revisions (on homepage and one interior page).",
      },
      {
        id: "p2d8",
        content:
          "1.5-Hour Training Session on managing pages, blog posts, and the media library.",
      },
    ],
    nonDeliverable: [
      { id: "p2nd1", content: "No custom-coded features from scratch." },
      {
        id: "p2nd2",
        content: "No complex animations or interactive elements.",
      },
      { id: "p2nd3", content: "No custom plugin development." },
      {
        id: "p2nd4",
        content:
          "No e-commerce (but you can install a basic WooCommerce setup as an Add-On - see below).",
      },
    ],
  },
  {
    id: "Package 3:",
    title: ' The \"Custom Landing Page + Microsite\"',
    description:
      "A product launch, event, or a specific marketing campaign that needs a high-converting, focused page.",
    priceRange: "$1,200 - $2,500",
    timeLine: "2-3 Weeks",
    deliverable: [
      {
        id: "p3d1",
        content:
          "One (1) high-conversion, beautifully designed Landing Page with clear sections (Hero, Benefits, Testimonials, CTA, FAQ).",
      },
      {
        id: "p3d2",
        content:
          "Optional: 2-3 supporting pages (Privacy Policy, Thank You, Details page) if needed.",
      },
      {
        id: "p3d3",
        content:
          "Deep Focus on Conversion: You'll strategically place calls-to-action, build trust elements, and ensure fast loading.",
      },

      {
        id: "p3d4",
        content:
          "Email List Integration: Connect a sign-up form to their Mailchimp or ConvertKit account.",
      },
      {
        id: "p3d5",
        content:
          "Performance-Optimized: This page will be built with a focus on speed scores (Google PageSpeed Insights).",
      },
      {
        id: "p3d6",
        content:
          "2 Rounds of Revisions focused entirely on copy and conversion flow.",
      },
      {
        id: "p3d7",
        content:
          "Analytics Setup: Basic Google Analytics/Google Tag Manager installation.",
      },
    ],
    nonDeliverable: [
      {
        id: "p3nd1",
        content:
          "This is not a full website. It's a focused, single-purpose digital asset.",
      },
      { id: "p3nd2", content: "No ongoing blog or content updates." },
    ],
  },
];
const addons = [
  {
    id: 1,
    title: "Blog Setup & Formatting",
    price: "$250",
    descriptionPrivate:
      "(If not in their package, set up 3 blog post templates and format their first 3 posts nicely).",
  },
  {
    id: 2,
    title: "Basic E-Commerce Setup (WooCommerce)",
    price: "$500 - $1,000",
    descriptionPrivate:
      "(Install WooCommerce, set up 5-10 products with images/descriptions, connect a payment gateway like Stripe, configure taxes/shipping basics). Only offer if you've practiced this!",
  },
  {
    id: 3,
    title: "Social Media Graphics Kit",
    price: "$200",
    descriptionPrivate:
      "(Create 5 matching banner images, profile pics, and post templates in Canva for their brand).",
  },
  {
    id: 4,
    title: "Additional Page",
    price: "$150/page",
    descriptionPrivate: "(Beyond the package limit).",
  },
  {
    id: 5,
    title: "Extended Training",
    price: "$75/hour",
    descriptionPrivate: "(For extra hand-holding).",
  },
  {
    id: 6,
    title: '3-Month "Peace of Mind" Retainer',
    price: "$75/month",
    descriptionPrivate:
      "(You perform weekly backups, update WordPress/core plugins monthly, and provide 30 minutes of support time for tiny text changes).",
  },
  // {
  //   id: 7,
  //   title: "",
  //   price: "",
  //   descriptionPrivate: "",
  // },
  // {
  //   id: 3,
  //   title: "",
  //   price: "",
  //   descriptionPrivate: "",
  // },
];

export { packages, addons };
