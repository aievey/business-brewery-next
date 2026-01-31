"use client";
import Button from "./button";
import { mainForm } from "@/lib/forms";
import { handleForm } from "@/lib/formhandler";
import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [isFinished, setIsFinished] = useState(false);
  async function handleSubmit(formData) {
    // 2. Send the data to your server function
    const result = await handleForm(formData);

    // 3. Check if the server sent back { success: true }
    if (result.success === true) {
      setIsFinished(true); // Flip the switch!
    }
  }
  if (isFinished) {
    return (
      <div className="flex h-full flex-col items-center rounded-xl bg-green-100 p-10 text-center">
        <Image
          src="https://media.discordapp.net/stickers/772970847232458782.png?size=160"
          alt="Success emote"
          height={200}
          width={200}
        />
        <h2 className="text-2xl font-bold text-green-500">
          Your message Has been recieved! 🚀
        </h2>
        <p className="text-lg text-stone-700">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="w-full rounded-2xl" action={handleSubmit}>
      {mainForm.map((form) => (
        <fieldset className="border p-6 text-stone-700" key={form.id}>
          <legend className="text-amber-500">{form.sectionTitle}</legend>

          {form.inputFields
            ? form.inputFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="text-sm">
                    {field.inputName}
                  </label>
                  <br />
                  <input
                    className="w-60 rounded-sm bg-stone-200 p-2"
                    type={field.inputType}
                    name={field.id}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))
            : form.inputCategories.map((categories) => (
                <fieldset className="border p-4" key={categories.id}>
                  <legend className="text-amber-500">{categories.id}</legend>
                  {categories.options ? (
                    categories.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center gap-4 py-1 text-lg"
                      >
                        <input
                          className="size-5"
                          type={categories.type}
                          name={categories.name}
                          value={option.value}
                          id={option.id}
                          required={categories.required ? true : false}
                        />
                        <label htmlFor={option.id}>{option.value}</label>
                      </div>
                    ))
                  ) : (
                    <textarea
                      className="h-40 w-full text-lg"
                      name={categories.name}
                      placeholder={categories.placeholder}
                      required
                    />
                  )}
                </fieldset>
              ))}
        </fieldset>
      ))}
      <div className="flex h-30 items-center justify-center">
        <Button type="submit" width="w-60">
          Get My Free Quote & Plan
        </Button>
      </div>
    </form>
  );
};
export default Form;
