import Image from "next/image";
const SubCover = ({ url, children }) => {
  return (
    <div className="relative flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl">
      <Image
        src={url}
        fill
        alt="ok"
        preload
        className="-z-10 object-cover"
        sizes="(max-width: 768px) 95vw, (max-width: 1200px) 840px, 1333.5px"
      />
      <div className="rounded-2xl bg-stone-800/60 p-4 backdrop-blur-xs">
        <h2 className="text-4xl font-extrabold tracking-widest text-amber-400 uppercase">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SubCover;
