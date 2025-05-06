"use client";
import type { IFrequentTransfer } from "@/api/types";
import clsx from "clsx/lite";
import Image from "next/image";
import { useState } from "react";

export const FrequestTransferClient = ({
  frequentTransfer,
}: {
  frequentTransfer: IFrequentTransfer[];
}) => {
  const [selectedTransfer, setSelectedTransfer] = useState<IFrequentTransfer>();
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-slate-600">Quick Transfer</h2>
      <div className="flex flex-col justify-center h-[276px] gap-3 bg-white rounded-xl p-6">
        <div className="flex mb-4 justify-between">
          <div className="flex overflow-x-auto gap-2 grow w-full">
            {frequentTransfer.map((transfer: IFrequentTransfer) => (
              <button
                onClick={() => setSelectedTransfer(transfer)}
                key={transfer.name}
                className="flex justify-between"
              >
                <div className="flex min-w-[90px] shrink-0 flex-col items-center gap-3">
                  <Image
                    src={`/users/${transfer.imageUrl}`}
                    alt="card"
                    width={55}
                    height={55}
                  />
                  <div className="flex flex-col items-center">
                    <h3
                      className={clsx(
                        selectedTransfer?.name === transfer.name &&
                          "font-semibold"
                      )}
                    >
                      {transfer.name}
                    </h3>
                    <p
                      className={clsx(
                        selectedTransfer?.name === transfer.name &&
                          "font-semibold",
                        "text-gray-400"
                      )}
                    >
                      {transfer.position}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="relative w-[20px] mt-10 shrink-0">
            <div className="absolute h-[70px] w-[70px] right-[-26px]">
              <Image
                src="/icons/right_chevron.png"
                alt="arrow"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" text-gray-400">Write Amount</div>

          <div className="flex relative">
            <div className="ml-auto w-full bg-[#EDF1F7] p-4 rounded-4xl">
              <input
                className="outline-none"
                placeholder="525.50"
                type="text"
              />
            </div>
            <div className="absolute right-[-20px] w-[125px]">
              {/* animated hover and click */}
              <button className="bg-black text-white p-4 rounded-4xl flex gap-2 hover:scale-110 transition-all active:scale-90">
                <div>Send</div>
                <Image
                  alt="send"
                  src="/icons/send.png"
                  width={26}
                  height={22}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
