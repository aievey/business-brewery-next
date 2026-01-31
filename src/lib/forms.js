const mainForm = [
  {
    id: "Personal",
    sectionTitle: "Personal Details",
    inputFields: [
      {
        id: "p.fname",
        inputType: "text",
        inputName: "First Name",
        placeholder: "First Name",
      },
      {
        id: "p.lname",
        inputType: "text",
        inputName: "Last Name",
        placeholder: "Last Name",
      },

      {
        id: "p.mail",
        inputType: "email",
        inputName: "E Mail",
        placeholder: "you@example.com",
      },
    ],
  },
  {
    id: "Project",
    sectionTitle: "Knowing the project",
    inputCategories: [
      {
        id: "Timeline",
        name: "timeline",
        type: "radio",
        required: true,
        options: [
          {
            id: "tr1",
            value: "ASAP (Within 2 weeks)",
          },
          {
            id: "tr2",
            value: "Within 1 Month",
          },
          {
            id: "tr3",
            value: "1-3 Months",
          },
          {
            id: "tr4",
            value: "Just Exploring",
          },
        ],
      },
      {
        id: "Budget",
        name: "budget",
        type: "radio",
        required: true,
        options: [
          {
            id: "br1",
            value: "$500 - $1500",
          },
          {
            id: "br2",
            value: "$1500 - $3000",
          },
          {
            id: "br3",
            value: "$3000 - $5000",
          },
          {
            id: "br4",
            value: "Not sure / Need a quote.",
          },
        ],
      },
      {
        id: "Project Type",
        name: "type",
        type: "checkbox",
        options: [
          {
            id: "ptc1",
            value: "New Website from Scratch",
          },
          {
            id: "ptc2",
            value: "Redisign / Update Existing Website",
          },
          {
            id: "ptc3",
            value: "Landing Page / Micro Site",
          },
          {
            id: "ptc4",
            value: "E-Commerce / Online Store",
          },
          {
            id: "ptc5",
            value: "Other (Please describe below)",
          },
        ],
      },
      {
        id: "Brief your project",
        name: "brief",
        type: "textarea",
        placeholder:
          "Briefly describe your business, your goals for this website, and any specific features or pages you have in mind. The more detail, the better I can help!",
      },
    ],
  },
];

export { mainForm };
