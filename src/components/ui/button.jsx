const Button = ({ children, width, accent }) => {
  // console.log(width);
  return (
    <button
      className={`${width ? width : "max-w-30"} rounded-full ${accent ? "border-2 border-amber-400 py-1.5" : "bg-amber-400 py-2"} p-1 text-center font-semibold tracking-wider text-stone-700 shadow hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};
export default Button;
