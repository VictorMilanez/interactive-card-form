import CompleteImg from "../../public/images/icon-complete.svg";
import { Button } from "./Button";

type CompletionScreenProps = {
  onContinue: () => void;
};

export const CompletionScreen = ({ onContinue }: CompletionScreenProps) => {
  return (
    <div className="w-130 h-96 lg:col-start-2 lg:row-start-2 md:row-start-13 flex flex-col gap-4 justify-center items-center md:ml-36 md:mt-80 lg:ml-60 2xl:ml-64 2xl:mb-44">
      <div className="mb-4">
        <img src={CompleteImg} alt="Imagem finalização" />
      </div>

      <div className="flex flex-col items-center gap-2 mb-6">
        <h3 className="text-3xl font-medium text-[hsl(278,68%,11%)] uppercase tracking-widest mb-4">
          Thank You!
        </h3>
        <p className="text-[hsl(279,6%,55%)] font-semibold">
          We've added your card details
        </p>
      </div>

      <Button label="Continue" onClick={onContinue} />
    </div>
  );
};
