import { Button } from "./Button";
import { useForm } from "react-hook-form";

export const Form = () => {
  return (
    <form className="form w-130 h-96 col-start-2 row-start-2 flex flex-col gap-1 items-center ml-60 2xl:ml-64 2xl:mb-44">
      <label
        htmlFor="name"
        className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
      >
        Cardholder name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g Jane Applessed"
        className="w-80 h-9 p-2 mb-10 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
      />

      <label
        htmlFor="cardnumber"
        className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
      >
        CARD NUMBER
      </label>
      <input
        type="text"
        name="cardnumber"
        id="cardnumber"
        placeholder="e.g 1234 5678 9123 0000
        "
        className="w-80 h-9 p-2 mb-10 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
      />

      <div className="flex justify-center w-full gap-7 mr-30">
        <div className="flex flex-col w-9">
          <label
            htmlFor="mounth"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            exp. date
          </label>
          <input
            type="text"
            name="mounth"
            id="mounth"
            placeholder="MM"
            className="w-14 h-9 p-2 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
          />
        </div>

        <div className="flex flex-col w-9 mr-6">
          <label
            htmlFor="year"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            (mm/yy)
          </label>
          <input
            type="text"
            name="yeaR"
            id="year"
            placeholder="YY"
            className="w-14 h-9 p-2 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
          />
        </div>

        <div className="flex flex-col w-9">
          <label
            htmlFor="safecode"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            cvc
          </label>
          <input
            type="text"
            name="safecode"
            id="safecode"
            placeholder="e.g. 123"
            className="w-40 h-9 p-2 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
          />
        </div>
      </div>

      <div className="mt-10">
        <Button label="Confirm" />
      </div>
    </form>
  );
};
