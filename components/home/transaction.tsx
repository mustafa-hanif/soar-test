import { IRecentTransaction } from "@/api/types";
import Image from "next/image";
import { format } from "date-fns";

export const Transaction = ({
  transaction,
}: {
  transaction: IRecentTransaction;
}) => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex gap-3 mb-1">
        <div className="h-[55px] w-[55px] shrink-0">
          <Image
            src={`/icons/${transaction.icon}`}
            alt=""
            aria-hidden="true"
            width={55}
            height={55}
          />
        </div>
        <div>
          <h3 className="font-semibold mb-0">{transaction.title}</h3>
          <p className="text-gray-600 text-sm">
            {format(transaction.date, "d MMMM yyyy")}
          </p>
        </div>
      </div>
      <div>
        {transaction.amount > 0 ? (
          <p className="text-green-500">
            +
            {transaction.amount.toLocaleString("en", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </p>
        ) : (
          <p className="text-red-500">
            -
            {Math.abs(transaction.amount).toLocaleString("en", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </p>
        )}
      </div>
    </div>
  );
};
