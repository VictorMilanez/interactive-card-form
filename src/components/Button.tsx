import { ButtonProps } from "../types/Button";

export const Button = ({ label }: ButtonProps) => {
  return (
    <button className="w-80 h-12 p-2 font-semibold text-[hsl(270,3%,87%)] bg-[hsl(278,68%,11%)] rounded-md cursor-pointer">
      {label}
    </button>
  );
};
