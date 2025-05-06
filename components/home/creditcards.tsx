import { ICreditCard } from "@/api/types";
import { CreditCard } from "./creditcard";
import cardsData from "@/api/mockData/cards.json";

export const CreditCards = async () => {
  const cards = cardsData;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">My Cards</h2>
      <div className="flex gap-3 overflow-x-auto h-[237px] font-special">
        {cards.map((card: ICreditCard) => (
          <CreditCard key={card.cardNumber} card={card} />
        ))}
      </div>
    </div>
  );
};
