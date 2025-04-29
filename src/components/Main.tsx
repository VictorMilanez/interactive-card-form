import { useState } from "react";
import { Card } from "./Card";
import { Form } from "./Form";
import { FormData } from "../types/FormData";
import { CompletionScreen } from "./CompletionScreen";

export const MainPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNumber: "",
    dateMonth: "",
    dateYear: "",
    safeCode: "",
  });

  const [formSend, setFormSend] = useState<boolean>(false);

  const handleConfirm = (data: FormData) => {
    console.log("dados recebidos: ", data);
    setFormData(data);
    setFormSend(true);
  };

  return (
    <section className="w-screen h-screen bg-white bg-[url('/images/bg-main-mobile.png')] lg:bg-[url('/images/bg-main-desktop.png')] lg:bg-[length:400px_100%] sm:bg-[length:800px_45%] bg-no-repeat bg-top lg:bg-left z-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col h-full md:grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr]">
        <div className="relative h-[300px] md:h-auto">
          <Card receivedValue={formData} />
        </div>
        {formSend ? (
          <CompletionScreen onContinue={() => setFormSend(false)} />
        ) : (
          <Form
            onConfirm={handleConfirm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </section>
  );
};
