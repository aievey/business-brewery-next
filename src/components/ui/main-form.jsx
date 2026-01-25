"use client";
import Button from "./button";

async function handleSubmit(e) {
  "useServer";
  const newEntry = {
    fullName: e.get("fname") + " " + e.get("lname"),
    email: e.get("email"),
    timeline: e.get("timeline"),
    budget: e.get("budget"),
    projectType: e.getAll("project"),
    description: e.get("description"),
  };
  console.log(newEntry);
}
const Form = () => {
  return (
    <form className="w-full rounded-2xl" action={handleSubmit}>
      <fieldset className="rounded-2xl border-2 border-amber-400 p-6">
        <legend className="text-amber-400">Knowing our customer</legend>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="fname"
              className="ml-4 text-sm font-semibold text-stone-700"
            >
              First Name *
            </label>
            <br />
            <input
              required
              className="rounded-full bg-amber-100 p-1 px-4"
              type="text"
              name="fname"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lname"
              className="ml-4 text-sm font-semibold text-stone-700"
            >
              Last Name *
            </label>
            <br />
            <input
              required
              type="text"
              name="lname"
              placeholder="Doe"
              className="rounded-full bg-amber-100 p-1 px-4"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="ml-4 text-sm font-semibold text-stone-700"
            >
              E-Mail *
            </label>
            <br />
            <input
              required
              className="rounded-full bg-amber-100 p-1 px-4"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="ml-4 text-sm font-semibold text-stone-700"
            >
              Company Name
            </label>
            <br />
            <input
              type="text"
              name="CompanyName"
              placeholder="Your Company"
              className="rounded-full bg-amber-100 p-1 px-4"
            />
          </div>
        </div>
      </fieldset>
      {/* <fieldset className="border-2 border-amber-100 p-6">
        <legend className="text-amber-400">Timeline & budget</legend> */}
      <fieldset className="rounded-2xl border-2 border-amber-400 p-6">
        <legend className="text-amber-400">Timeline</legend>
        <input type="radio" name="timeline" value="Urgent" />{" "}
        <label htmlFor="timeline">ASAP (Under 2 Weeks.)</label> <br />
        <input type="radio" name="timeline" value="Within a month" />{" "}
        <label htmlFor="timeline">Within a Month.</label>
        <br />
        <input type="radio" name="timeline" value="2 - 3 months" />{" "}
        <label htmlFor="timeline">2 - 3 Months.</label>
        <br />
        <input type="radio" name="timeline" value="Exploring" />{" "}
        <label htmlFor="timeline">Just Exploring</label>
      </fieldset>
      <fieldset className="rounded-2xl border-2 border-amber-400 p-6">
        <legend className="text-amber-400">Budget</legend>
        <input type="radio" name="budget" value="500 - 1500" />{" "}
        <label htmlFor="budget">$500 - $1000</label> <br />
        <input type="radio" name="budget" value="1500 - 3000" />{" "}
        <label htmlFor="budget">$1000 - $2000</label>
        <br />
        <input type="radio" name="budget" value="3000 - 5000" />{" "}
        <label htmlFor="budget">$3000 - $5000</label>
        <br />
        <input type="radio" name="budget" value="Quote please" />{" "}
        <label htmlFor="budget">Not sure / Get a quote</label>
      </fieldset>
      <fieldset className="rounded-2xl border-2 border-amber-400 p-6">
        <legend className="text-amber-400">Project Type</legend>
        <input type="checkbox" name="project" value="From Scratch" />{" "}
        <label htmlFor="project">New Website From Scratch</label> <br />
        <input
          type="checkbox"
          name="project"
          value="Redesign / Update  Existing"
        />{" "}
        <label htmlFor="project">Redesign / Update of Existing Site</label>
        <br />
        <input type="checkbox" name="project" value="Microsite" />{" "}
        <label htmlFor="project">Landing Page / Microsite</label>
        <br />
        <input type="checkbox" name="project" value="Store / Ecommerce" />{" "}
        <label htmlFor="project">E- Commerce / Online Store</label> <br />
        <input type="checkbox" name="project" value="Others" />{" "}
        <label htmlFor="project">Others (Please describe below.)</label>
      </fieldset>

      <fieldset className="rounded-2xl border-2 border-amber-400 p-6">
        <legend className="text-amber-400">Brief your project</legend>
        <textarea
          name="description"
          className="h-40 w-full border border-stone-100 p-4"
          placeholder="Briefly describe your business, your goals for this website, and any specific features or pages you have in mind. The more detail, the better I can help!"
        />
      </fieldset>
      <div className="flex h-30 items-center justify-center">
        <Button type="submit" width="w-60">
          Get My Free Quote & Plan
        </Button>
      </div>

      {/* </fieldset> */}
    </form>
  );
};
export default Form;
