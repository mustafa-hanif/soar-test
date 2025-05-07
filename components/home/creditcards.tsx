import { ICreditCard } from "@/data/types";
import { CreditCard } from "./creditcard";
import { api } from "@/data";

export const CreditCards = async () => {
  const cards = await api.cards();
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600" id="my-cards-heading">
        My Cards
      </h2>
      <div
        className="flex gap-3 overflow-x-auto h-[252px] font-special"
        role="region"
        aria-labelledby="my-cards-heading"
        tabIndex={0}
      >
        {cards.body.map((card: ICreditCard) => (
          <CreditCard key={card.cardNumber} card={card} />
        ))}
      </div>
    </div>
  );
};
