"use client";
import Image from "next/image";
import { useState } from "react";

{
  /* <b>Member component required!</b> <br />
            A professional but approachable headshot.
            <br />
            Name & Title.  Include a fun, humanizing fact e.g., <br />
            */
}

const Card = ({ img }) => {
  return (
    <div className="h-full min-w-60 snap-center overflow-hidden rounded-2xl shadow duration-200">
      <div className="to relative h-40 rounded-b-2xl bg-amber-100 bg-linear-to-t from-white shadow">
        <Image
          src={`https://robohash.org/${img}?set=set4`}
          fill
          className="object-contain"
          alt="profile"
        />
      </div>
      <div className="p-4 text-stone-600">
        <h3 className="text-lg font-semibold tracking-widest text-stone-700">
          aievey
        </h3>
        <h4 className="font-light">Frontend Developer</h4>
        <p className="my-2">
          Focus on expertise, passion, and how they help clients.
        </p>
        <p className="rounded-md bg-stone-100 p-2 font-light italic">
          Coffee enthusiast, mountain biker, and detail-obsessed problem-solver.
        </p>
      </div>
    </div>
  );
};
const People = () => {
  return (
    <div className="flex max-w-full snap-x gap-4 overflow-hidden overflow-x-scroll px-10 py-4">
      <Card img="SL0" />
      <Card img="SLO" />
      <Card img="BKW" />
      <Card img="S82" />
    </div>
  );
};

export default People;
