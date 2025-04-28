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
    <section className="w-screen h-screen bg-white bg-[url('/images/bg-main-desktop.png')] bg-[length:400px_100%] relative bg-no-repeat bg-left z-0">
      <div className="max-w-screen-2xl mx-auto h-full grid grid-cols-[minmax(0,400px)_1fr]">
        <Card receivedValue={formData} />
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
