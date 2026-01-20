import Image from "next/image";
const SubCover = ({ url, children }) => {
  return (
    <div className="flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl">
      <Image
        src={url}
        height={1200}
        width={1200}
        alt="ok"
        className="-z-10 h-full w-full object-cover"
      />
      <div className="absolute rounded-2xl bg-stone-800/40 p-4 backdrop-blur-xs">
        <h2 className="text-4xl font-extrabold tracking-widest text-stone-50 uppercase">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SubCover;
