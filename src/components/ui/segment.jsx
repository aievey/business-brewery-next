const Head = ({ children }) => {
  return (
    <h2 className="mb-4 text-2xl font-semibold tracking-wide text-stone-600">
      {children}
    </h2>
  );
};
const Elaboration = ({ children }) => {
  return <div className="space-y-4 text-lg text-stone-600">{children}</div>;
};
const Small = ({ children }) => {
  return (
    <div className="flex w-full flex-col justify-center overflow-hidden rounded-2xl bg-black/5 p-4 lg:w-4/10">
      {children}
    </div>
  );
};
const Large = ({ children }) => {
  return <div className="w-full rounded-2xl p-4 lg:w-6/10">{children}</div>;
};
const Segment = ({ children }) => {
  return (
    <div className="flex w-full flex-wrap rounded-2xl shadow md:flex-nowrap md:gap-10">
      {children}
    </div>
  );
};

export { Segment, Large, Small, Head, Elaboration };
