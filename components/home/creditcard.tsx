import { ICreditCard } from "@/api/types";
import clsx from "clsx/lite";
import Image from "next/image";

export const CreditCard = ({ card }: { card: ICreditCard }) => {
  return (
    <div
      className={clsx(
        `flex grow min-w-[350px] max-w-[350px] flex-col gap-3 bg-white rounded-4xl pt-6 `,
        card.color === "dark"
          ? "bg-linear-to-l from-black to-[#5B5A6F] text-white"
          : "bg-white text-gray-800"
      )}
    >
      <div className="flex justify-between px-6 mb-4">
        <div>
          <h3
            className={clsx(
              card.color === "light" && "text-[#718EBF]",
              "font-normal"
            )}
          >
            Balance
          </h3>
          <p className="font-bold text-xl">
            {card.balance.toLocaleString("en", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <div>
          <Image
            src={
              card.color === "dark"
                ? "/icons/chip_card.png"
                : "/icons/chip_card_black.png"
            }
            alt="chip"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="flex px-6">
        <div>
          <h3
            className={clsx(
              "font-normal text-xs",
              card.color === "light" && "text-[#718EBF]",
              card.color === "dark" && "opacity-70"
            )}
          >
            CARD HOLDER
          </h3>
          <p className="font-bold">{card.cardHolder}</p>
        </div>
        <div className="mx-auto">
          <h3
            className={clsx(
              "font-normal text-xs",
              card.color === "light" && "text-[#718EBF]",
              card.color === "dark" && "opacity-70"
            )}
          >
            VALID THRU
          </h3>
          <p className="font-bold">{card.valid}</p>
        </div>
      </div>
      <div
        className={clsx(
          "flex items-center mt-auto px-6 py-6 rounded-b-4xl",
          card.color === "dark" && "bg-linear-to-l from-[#0b0b0c] to-[#656472]",
          card.color === "light" && "border-t border-[#DFEAF2]"
        )}
      >
        <p className="text-2xl font-bold">{card.cardNumber}</p>
        <div className="ml-auto">
          <Image
            src={
              card.color === "dark"
                ? "/icons/master_card.png"
                : "/icons/master_card_light.png"
            }
            alt="mastercard"
            width={44}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
