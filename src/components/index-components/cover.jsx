import Image from "next/image";
export default function Cover() {
  return (
    <div className="center relative h-[94vh] max-h-270 w-full max-w-480 items-center justify-center bg-black md:flex">
      {/* leftcolumn */}
      <div className="flex h-3/10 items-center justify-center md:h-full md:w-4/10 md:justify-end">
        <div className="w-9/10">
          <div className="flex items-center justify-center xl:w-full xl:justify-end">
            <div className="py-4 text-left text-white md:text-right">
              <h2 className="py-4 text-4xl/1 font-extrabold md:text-5xl">
                Business Brewery
              </h2>
              <p className="text-sm font-extralight">
                -ready to take your business to the next level?
              </p>
            </div>
          </div>
          <h1 className="text-center text-2xl font-extralight text-amber-400 italic md:text-right">
            We will help you expose your business to your potential clients.
          </h1>
        </div>
      </div>
      {/* right Column */}
      <div className="relative h-7/10 md:h-full md:w-6/10">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/business-brewery-cover-main.avif"
            height={1200}
            width={1200}
            priority
            alt="business-brewery-cover "
            className="z-0 aspect-auto h-full object-cover md:mask-l-from-90%"
          />
        </div>
        <div className="text-l absolute -bottom-15 left-1/2 z-10 flex h-1/11 w-full -translate-x-1/2 transform items-center justify-center rounded-2xl bg-stone-800/80 py-10 text-stone-50 shadow backdrop-blur-[5px] xl:-bottom-8 xl:w-1/2 xl:p-0">
          <p className="px-5 text-center font-light tracking-wider">
            We take care of your exposure so{" "}
            <span className="font-bold text-amber-400">
              you can focus on your business 100%.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
