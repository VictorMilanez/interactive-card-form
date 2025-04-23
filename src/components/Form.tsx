import { FormData } from "../types/FormData";
import { Button } from "./Button";
// import { useForm } from "react-hook-form";

type InputComponentsProps = {
  onInputChange: (name: string, value: string) => void;
  formData: FormData;
  onConfirm: () => void;
};

export const Form = ({
  onInputChange,
  formData,
  onConfirm,
}: InputComponentsProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  return (
    <form
      className="form w-130 h-96 col-start-2 row-start-2 flex flex-col gap-1 items-center ml-60 2xl:ml-64 2xl:mb-44"
      onSubmit={(event) => {
        event.preventDefault();
        onConfirm();
      }}
    >
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
        value={formData.name}
        onChange={handleInputChange}
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
        name="number"
        id="cardnumber"
        placeholder="e.g 1234 5678 9123 0000
        "
        value={formData.number}
        onChange={handleInputChange}
        maxLength={19}
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
            name="dateMonth"
            id="mounth"
            placeholder="MM"
            value={formData.dateMonth}
            onChange={handleInputChange}
            maxLength={2}
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
            name="dateYear"
            id="year"
            placeholder="YY"
            value={formData.dateYear}
            onChange={handleInputChange}
            maxLength={2}
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
            name="safeCode"
            id="safecode"
            placeholder="e.g. 123"
            value={formData.safeCode}
            onChange={handleInputChange}
            maxLength={3}
            className="w-40 h-9 p-2 text-[hsl(279,6%,55%)] outline-[hsl(278,94%,30%)] border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md"
          />
        </div>
      </div>

      <div className="mt-10">
        <Button label="Confirm" type="submit" />
      </div>
    </form>
  );
};
