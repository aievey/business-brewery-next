import { Elaboration } from "../ui/segment";

const PackageCard = ({ offer }) => {
  return (
    <div className="space-y-4 rounded-2xl border border-stone-200 p-4 text-stone-700 shadow md:max-w-100">
      <div className="py-4 font-semibold">
        <span className="text-sm">{offer.id}</span> <br />
        <h2 className="text-2xl text-amber-400">{offer.title}</h2>
      </div>
      <Elaboration>
        <h3 className="rounded-2xl bg-linear-to-bl from-amber-100 to-amber-400 p-4 italic">
          <span className="font-semibold">Perfect for:</span>{" "}
          {offer.description}
        </h3>
        <div>
          <p>
            <span className="font-semibold">Price:</span> {offer.priceRange}
          </p>
          <p>
            <span className="font-semibold">Timeline:</span> {offer.timeLine}
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Deliverables</h3>
          <ul className="list-disc">
            {offer.deliverable.map((item) => (
              <li className="ml-6">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-rose-400">Does Not Include</h4>
          <ul className="list-disc">
            {offer.nonDeliverable.map((item) => (
              <li className="ml-6">{item}</li>
            ))}
          </ul>
        </div>
      </Elaboration>
    </div>
  );
};

export default PackageCard;
