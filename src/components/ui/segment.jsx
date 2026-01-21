const Head = ({ children }) => {
  return (
    <h2 className="py-4 text-2xl font-semibold tracking-wide text-stone-600">
      {children}
    </h2>
  );
};
const Elaboration = ({ children }) => {
  return <p className="text-lg text-stone-600">{children}</p>;
};
const Small = ({ children }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-black/5 p-4 lg:w-3/10">
      {children}
    </div>
  );
};
const Large = ({ children }) => {
  return <div className="w-full rounded-2xl p-4 lg:w-7/10">{children}</div>;
};
const Segment = ({ children }) => {
  return (
    <div className="flex w-full flex-wrap rounded-2xl shadow md:flex-nowrap md:gap-10">
      {children}
    </div>
  );
};

export { Segment, Large, Small, Head, Elaboration };
