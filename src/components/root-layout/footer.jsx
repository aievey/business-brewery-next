import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <footer className="mt-4 mr-auto ml-auto min-h-50 w-12/13 max-w-427 rounded-2xl bg-stone-800 p-4 md:mt-10 md:p-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4 p-4 text-stone-50 md:h-full md:min-w-6/9 md:flex-nowrap">
            {/* Footer hero */}
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <div className="space-y-4">
                <Image
                  src="/business-brewery-logo.png"
                  height={50}
                  width={50}
                  alt="business-brewery-logo"
                />
                <h2 className="text-2xl font-extrabold tracking-wider">
                  Business Brewery
                </h2>
              </div>

              <p className="py-2">
                <b>Update</b> / <b>Renew</b> or even create from <b>Scratch</b>{" "}
                your business profile online <b>with us!</b>
              </p>
              <Button width="w-1/2">Start now</Button>
            </div>
            {/* Middle */}
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <h2 className="text-lg font-bold">Company</h2>
              <ul className="ml-4 space-y-2">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/about/#testimonials">Testimonials </Link>
                </li>
                <li>
                  <Link href="/how-it-works">Process</Link>
                </li>
                <li>
                  <Link href="/package">Packages</Link>
                </li>
              </ul>
            </div>
            {/* end */}
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <h2 className="text-lg font-bold">Terms of Services</h2>
              <ul className="ml-4 space-y-2">
                <li>
                  <Link href="/legal">Services</Link>
                </li>
                <li>
                  <Link href="/legal/#privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/legal/#refund">Refund</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <p className="relative bottom-0 z-10 text-center text-stone-700">
        All Rights Reserved © Business Brewery{" "}
        <span className="font-bold">{currentDate} </span>
      </p>
    </>
  );
};

export default Footer;
