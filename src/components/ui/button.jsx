"use client";
const Button = ({ children, width, accent, type }) => {
  // console.log(width);
  return (
    <button
      type={type}
      className={`${width ? width : "max-w-30"} rounded-full ${accent ? "border-2 border-amber-400 py-1.5" : "bg-amber-400 py-2"} p-1 text-center font-semibold tracking-wider text-stone-700 shadow duration-200 hover:cursor-pointer hover:bg-amber-300`}
    >
      {children}
    </button>
  );
};
export default Button;
