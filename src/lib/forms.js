const main = [
  {
    id: "Personal",
    title: "Personal Details",
    type: "text",
    label: inputFields.id,
    inputFields: [
      {
        id: "p.fname",
        placeholder: "First Name",
      },
      {
        id: "p.lname",
        placeholder: "Last Name",
      },
      {
        id: "p.mail",
        placeholder: "you@example.com",
      },
    ],
  },
  {
    id: "inquery",
    projectTimeline: {
      name: "timeline",
      type: "radio",
      options: [
        {
          id: "i.timeline1",
          Label: "",
          value: "",
        },
        {
          id: "i.timeline2",
          Label: "",
          value: "",
        },
        {
          id: "i.timeline3",
          Label: "",
          value: "",
        },
        {
          id: "i.timeline4",
          Label: "",
          value: "",
        },
      ],
    },
  },
];

console.log(main[0].inputFields.check);
