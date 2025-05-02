import { useEffect } from "react";
import { FormData } from "../types/FormData";
import { Button } from "./Button";
import { useForm } from "react-hook-form";

type InputComponentsProps = {
  onConfirm: (data: FormData) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export const Form = ({ onConfirm, setFormData }: InputComponentsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const inputValues = watch();

  useEffect(() => {
    setFormData((prevData) => {
      if (JSON.stringify(prevData) !== JSON.stringify(inputValues)) {
        return inputValues;
      }
      return prevData;
    });
  }, [inputValues, setFormData]);

  const handleSubmitForm = (data: FormData) => {
    console.log(data);
    onConfirm(data);
  };

  return (
    <form
      className="form lg:w-130 lg:h-96 md:w-100 md:h-60 sm:w-80 sm:h-40 col-start-1 row-start-12 lg:col-start-2 lg:row-start-2 flex flex-col gap-1 items-center sm:ml-44 md:ml-56 2xl:ml-96 2xl:mb-44"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <label
        htmlFor="name"
        className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
      >
        Cardholder name
      </label>
      <input
        type="text"
        id="name"
        placeholder="e.g Jane Applessed"
        className={`w-80 h-9 p-2 text-[hsl(279,6%,55%)] ${
          errors.name
            ? "outline-red-500 border-red-500"
            : "outline-[hsl(278,94%,30%)]"
        } border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md`}
        {...register("name", {
          required: "Can't be blank!",
        })}
      />
      {typeof errors.name?.message === "string" && (
        <p className="text-sm text-red-500">{errors.name?.message}</p>
      )}

      <label
        htmlFor="cardNumber"
        className="w-80 lg:mt-10 mt-5 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
      >
        CARD NUMBER
      </label>
      <input
        type="text"
        id="cardNumber"
        placeholder="e.g 1234 5678 9123 0000"
        className={`w-80 h-9 p-2 text-[hsl(279,6%,55%)] ${
          errors.cardNumber
            ? "outline-red-500 border-red-500"
            : "outline-[hsl(278,94%,30%)]"
        } border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md`}
        {...register("cardNumber", {
          required: "Can't be blank!",
          maxLength: {
            value: 19,
            message: "Name can't be longer than 19 characters",
          },
          pattern: {
            value: /^[0-9\s]+$/,
            message: "Only numbers are allowed",
          },
        })}
      />
      {typeof errors.cardNumber?.message === "string" && (
        <p className="text-sm text-red-500">{errors.cardNumber?.message}</p>
      )}

      <div className="flex justify-center w-full gap-7 mr-30 mt-10">
        <div className="flex flex-col w-9">
          <label
            htmlFor="dateMonth"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            exp. date
          </label>
          <input
            type="text"
            id="dateMonth"
            placeholder="MM"
            maxLength={2}
            className={`w-14 h-9 p-2 text-[hsl(279,6%,55%)] ${
              errors.dateMonth
                ? "outline-red-500 border-red-500"
                : "outline-[hsl(278,94%,30%)]"
            } border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md`}
            {...register("dateMonth", {
              required: "Can't be blank!",
              maxLength: {
                value: 2,
                message: "Can't be longer than 2 characters",
              },
            })}
          />
          {typeof errors.dateMonth?.message === "string" && (
            <p className="text-sm text-red-500 w-24">
              {errors.dateMonth?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-9 mr-6">
          <label
            htmlFor="dateYear"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            (mm/yy)
          </label>
          <input
            type="text"
            id="dateYear"
            placeholder="YY"
            className={`w-14 h-9 p-2 text-[hsl(279,6%,55%)] ${
              errors.dateYear
                ? "outline-red-500 border-red-500"
                : "outline-[hsl(278,94%,30%)]"
            } border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md`}
            {...register("dateYear", {
              required: "Can't be blank!",
              maxLength: {
                value: 2,
                message: "Can't be longer than 2 characters",
              },
            })}
          />
          {typeof errors.dateYear?.message === "string" && (
            <p className="text-sm text-red-500 w-24">
              {errors.dateYear?.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-9">
          <label
            htmlFor="safeCode"
            className="w-80 text-[hsl(278,68%,11%)] font-bold text-xs uppercase"
          >
            cvc
          </label>
          <input
            type="text"
            id="safeCode"
            placeholder="e.g. 123"
            className={`w-40 h-9 p-2 text-[hsl(279,6%,55%)] ${
              errors.safeCode
                ? "outline-red-500 border-red-500"
                : "outline-[hsl(278,94%,30%)]"
            } border border-[hsl(270,3%,87%)] shadow-sm shadow-gray-200 rounded-md`}
            {...register("safeCode", {
              required: "Can't be blank!",
              maxLength: {
                value: 3,
                message: "Can't be longer than 3 characters",
              },
            })}
          />
          {typeof errors.safeCode?.message === "string" && (
            <p className="text-sm text-red-500 w-26">
              {errors.safeCode?.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <Button label="Confirm" type="submit" />
      </div>
    </form>
  );
};
