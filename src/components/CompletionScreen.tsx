import CompleteImg from "../../public/images/icon-complete.svg";
import { Button } from "./Button";

type CompletionScreenProps = {
  onContinue: () => void;
};

export const CompletionScreen = ({ onContinue }: CompletionScreenProps) => {
  return (
    <div className="md:w-130 md:h-96 sm:h-52 lg:col-start-2 lg:row-start-2 md:row-start-13 flex flex-col md:gap-4 justify-center items-center md:ml-36  lg:ml-60 2xl:ml-94 2xl:mb-44">
      <div className="mb-4 sm:w-16">
        <img src={CompleteImg} alt="Imagem finalização" />
      </div>

      <div className="flex flex-col items-center md:gap-2 md:mb-6 sm:mb-2">
        <h3 className="md:text-3xl sm:text-lg font-medium text-[hsl(278,68%,11%)] uppercase tracking-widest md:mb-4 sm:mb-2">
          Thank You!
        </h3>
        <p className="text-[hsl(279,6%,55%)] font-semibold sm:text-xs sm:mb-4">
          We've added your card details
        </p>
      </div>

      <Button label="Continue" onClick={onContinue} />
    </div>
  );
};
