"use client";
import { useState } from "react";
import { faqs } from "@/lib/process";
import { Head } from "./segment";

const QnA = () => {
  const [isAccordionOpen, setOpen] = useState(false);
  function handleAccrodion(id) {
    setOpen(isAccordionOpen === id ? false : id);
  }
  return (
    <div className="w-full rounded-2xl bg-amber-200 p-6">
      <Head>FAQs</Head>
      {faqs.map((q) => {
        const isOpen = isAccordionOpen === q.id;

        return (
          <div className="mb-4 text-lg text-stone-600" key={q.id}>
            <button
              className={`w-full rounded-lg transition-colors duration-200 ${isOpen ? "bg-white" : "bg-amber-50"} p-2 text-left shadow hover:cursor-pointer`}
              onClick={() => handleAccrodion(q.id)}
            >
              <div className="flex justify-between">
                <span>{q.q}</span>
                {isOpen ? <span>-</span> : <span>+</span>}
              </div>
            </button>
            <div
              className={`overflow-hidden rounded-r-lg border-l-3 border-stone-600 bg-amber-100 px-2 transition-all duration-200 ${isOpen ? "mt-2 " : "h-0"}`}
            >
              {q.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default QnA;
