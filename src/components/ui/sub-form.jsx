import Button from "./button";
const SubForm = () => {
  return (
    <form className="flex flex-wrap justify-center gap-10">
      <div className="w-full space-y-4 p-4">
        <label className="ml-4 text-sm" htmlFor="name">
          Full Name
        </label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="FirstName LastName"
          required
          className="w-full rounded-full border-2 border-amber-400 bg-white p-2 px-2 text-sm"
        />{" "}
        <br />
        <label className="ml-4 text-sm" htmlFor="email">
          Mail
        </label>
        <br />
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="w-full rounded-full border-2 border-amber-400 bg-white p-2 px-2 text-sm"
        />
        <br />
        <label className="ml-4 text-sm" htmlFor="options">
          Looking forward to...
        </label>
        <br />
        <select
          name="options"
          className="w-full rounded-full border-2 border-amber-400 bg-white p-2 px-2 text-sm"
        >
          <option>I am looking for...</option>
          <option>I want to renew / upgrade</option>
          <option>Make from scratch</option>
        </select>
      </div>
      <Button width={"w-40"}>Submit</Button>
    </form>
  );
};
export default SubForm;
