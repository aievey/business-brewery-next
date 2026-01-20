const Button = ({ children, width }) => {
  // console.log(width);
  return (
    <div
      className={`${width ? width : "max-w-30"} rounded-2xl bg-amber-400 p-1 text-center font-semibold tracking-wider text-stone-700 shadow`}
    >
      {children}
    </div>
  );
};
export default Button;
