import { FormData } from "../types/FormData";

type CardProps = {
  receivedValue: FormData;
};

export const Card = ({ receivedValue }: CardProps) => {
  return (
    <>
      <div className="lg:w-90 w-84 h-54 p-4 flex flex-col justify-end rounded-xl bg-[url('/images/bg-card-front.png')] absolute md:top-36 md:left-1/2 lg:top-35 lg:left-35 z-1">
        <div className="w-12 h-12 absolute top-5 left-8 rounded-full bg-white"></div>
        <div className="w-5 h-5 absolute top-9 left-24 rounded-full border border-white"></div>
        <p className="ml-4 text-white text-2xl font-semibold tracking-widest">
          {receivedValue.cardNumber || "1234 5678 9212 8794"}
        </p>
        <div className="ml-4 mt-5 mb-2 flex justify-between w-72">
          <p className="text-white text-xs uppercase tracking-widest">
            {receivedValue.name || "Nome Sobrenome"}
          </p>
          <div className="flex">
            <p className="text-white text-xs tracking-widest">
              {receivedValue.dateMonth || "00"}
            </p>
            <p className="text-white text-xs tracking-widest">/</p>
            <p className="text-white text-xs tracking-widest">
              {receivedValue.dateYear || "09"}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-90 w-84 h-54 flex justify-end items-center rounded-xl bg-[url('/images/bg-card-back.png')] absolute md:top-4 md:left-2/3 lg:top-95 lg:left-60 z-0">
        <p className="pt-6 pr-4 tracking-widest text-white text-xs">
          {receivedValue.safeCode || "000"}
        </p>
      </div>
    </>
  );
};
