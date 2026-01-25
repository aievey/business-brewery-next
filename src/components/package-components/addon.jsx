const AddOn = ({ list }) => {
  return (
    <div className="w-full rounded-2xl border border-stone-400 p-4 text-stone-700 md:w-100">
      <h2 className="rounded-2xl bg-linear-to-bl from-amber-50 to-amber-400 p-4 text-2xl">
        Add Ons
      </h2>
      <ul className="list-disc space-y-2 p-4">
        {list.map((add) => (
          <li key={add.id}>
            <div className="rounded-2xl p-4 shadow">
              <h3 className="py-2 font-semibold">{add.title} </h3>
              <p className="rounded-full bg-amber-100 px-4">{add.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddOn;
