"use server";

async function handleForm(formData) {
  const discordHook = process.env.DISCORD_WEBHOOK_URL;
  const data = {
    clientName: formData.get("p.fname") + " " + formData.get("p.lname"),
    contact: formData.get("p.mail"),
    projectInfo: formData.get("brief"),
    timeline: formData.get("timeline"),
    budget: formData.get("budget"),
    lookingFor: formData.getAll("type"),
  };

  const discordPayload = {
    embeds: [
      {
        title: "New Quote Request",
        color: 0xfbbf24,
        fields: [
          { name: "Client Name", value: data.clientName, inline: true },
          { name: "Email", value: data.contact, inline: true },
          { name: "Project Brief", value: data.projectInfo },
          { name: "Timeline", value: data.timeline || "Not specified" },
          { name: "Budget", value: data.budget },
          {
            name: "Looking for",
            value:
              data.lookingFor.length > 0
                ? data.lookingFor.join(", ")
                : "Nothing selected",
          },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(discordHook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });
    if (!response.ok) throw new Error("Discord notification failed");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to send notification" };
  }
}

export { handleForm };
