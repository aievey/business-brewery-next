import Image from "next/image";
const SubCover = ({ url, children }) => {
  return (
    <div className="relative flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl">
      <Image src={url} fill alt="ok" className="-z-10 object-cover" />
      <div className="rounded-2xl bg-stone-800/40 p-4 backdrop-blur-xs">
        <h2 className="text-4xl font-extrabold tracking-widest text-stone-50 uppercase">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SubCover;
