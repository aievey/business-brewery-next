const packages = [
  {
    id: "Package 1:",
    title: 'The "Get Started" Site',
    description:
      "A freelancer, artist, local shop, or simple service business that just needs an online brochure.",
    priceRange: "$800 - $1,500",
    timeLine: "1-2 Weeks",
    deliverable: [
      "A clean, modern 3-Page Website (Home, About, Contact) using a premium WordPress theme or a simple HTML/CSS template.",
      "Customization: You'll customize the theme/template with the client's logo, colors, fonts, and content.",
      "Contact Form: A simple form that emails them leads.",
      "Basic Setup: Connect their custom domain, set up hosting (you can use a simple reseller account or guide them).",
      "1 Round of Revisions on the homepage design before building.",
      "1 Round of Revisions on the homepage design before building.",
      "1-Hour Training Session via Zoom on how to log in and update basic text/images.",
    ],
    nonDeliverable: [
      "No custom graphics or illustrations (you'll use stock images they provide/license).",
      "No e-commerce, memberships, or logins.",
      "No custom functionality beyond the contact form.",
      "No blog setup (unless it's a one-click theme feature).",
      "No ongoing updates or content changes after launch.",
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
      "A more customized Up to 7-Page Website (Home, About, Services, Portfolio/Gallery, Blog, Contact, FAQ) using a flexible page-builder theme (like Astra + Elementor, GeneratePress) or a more advanced template.",
      "Custom Design within a Framework: You'll do more than just change colors; you'll significantly rearrange layouts and components to match a provided design or your mockup.",
      "Portfolio/Gallery: A nice-looking display for their work.",
      "Blog Setup: Categories, initial formatting, and a nice layout.",
      "Advanced Contact Form: Possibly with fields for service inquiries or file upload.",
      "Basic Speed Optimization: Image compression, caching plugin setup.",
      "2 Rounds of Revisions (on homepage and one interior page).",
      "1.5-Hour Training Session on managing pages, blog posts, and the media library.",
    ],
    nonDeliverable: [
      "No custom-coded features from scratch.",
      "No complex animations or interactive elements.",
      "No custom plugin development.",
      "No e-commerce (but you can install a basic WooCommerce setup as an Add-On - see below).",
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
      "One (1) high-conversion, beautifully designed Landing Page with clear sections (Hero, Benefits, Testimonials, CTA, FAQ).",
      "Optional: 2-3 supporting pages (Privacy Policy, Thank You, Details page) if needed.",
      "Deep Focus on Conversion: You'll strategically place calls-to-action, build trust elements, and ensure fast loading.",
      "Email List Integration: Connect a sign-up form to their Mailchimp or ConvertKit account.",
      "Performance-Optimized: This page will be built with a focus on speed scores (Google PageSpeed Insights).",
      "2 Rounds of Revisions focused entirely on copy and conversion flow.",
      "Analytics Setup: Basic Google Analytics/Google Tag Manager installation.",
    ],
    nonDeliverable: [
      "This is not a full website. It's a focused, single-purpose digital asset.",
      "No ongoing blog or content updates.",
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
