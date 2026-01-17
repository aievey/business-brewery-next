import Image from "next/image";
export default function Cover() {
  return (
    <div className="relative w-full center max-w-480 h-[94vh] max-h-270 bg-black md:flex justify-center items-center">
      {/* leftcolumn */}
      <div className="h-3/10 md:h-full md:w-4/10 flex  justify-center items-center md:justify-end">
        <div className="w-9/10">
          <div className="flex justify-center items-center xl:w-full xl:justify-end">
            <div className="text-left py-4 text-white md:text-right">
              <h2 className="font-extrabold py-4 text-4xl/1 md:text-5xl ">
                Business Brewery
              </h2>
              <p className="font-extralight text-sm">
                -ready to take your business to the next levl?
              </p>
            </div>
          </div>
          <h1 className="text-center md:text-right text-amber-400 font-extralight text-2xl italic">
            We will help you expose your business to your potential clients.
          </h1>
        </div>
      </div>
      {/* right Column */}
      <div className="relative h-7/10 md:h-full md:w-6/10 ">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/business-brewery-cover-main.avif"
            height={1200}
            width={1200}
            priority
            alt="business-brewery-cover "
            className="aspect-auto h-full object-cover z-0 md:mask-l-from-90%"
          />
        </div>
        <div className="w-full absolute -bottom-15 xl:-bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-l shadow h-1/11 bg-white/90 py-10 xl:p-0 xl:w-1/2 rounded-2xl z-10  backdrop-blur-[5px]">
          <p className="text-center font-light px-5">
            We take care of your exposure so{" "}
            <span className="text-amber-600 font-bold">
              you can focus on your business 100%.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
