import { Card } from "./Card";
import { Form } from "./Form";

export const MainPage = () => {
  return (
    // <section className="w-screen h-screen grid grid-cols-[minmax(0,400px)_1fr] bg-white bg-[url('/images/bg-main-desktop.png')] bg-[length:400px_100%] relative bg-no-repeat bg-left z-0">
    //   <div className="w-90 h-52 rounded-xl bg-[url('/images/bg-card-front.png')] absolute top-35 left-35 z-0"></div>
    //   <div className="w-90 h-54 rounded-xl bg-[url('/images/bg-card-back.png')] absolute top-95 left-60 z-0"></div>
    //   <div className="w-12 h-12 absolute top-44 left-44 rounded-full bg-white"></div>
    //   <div className="w-5 h-5 absolute top-48 left-60 rounded-full border border-white"></div>

    //   <Form />
    // </section>

    <section className="w-screen h-screen bg-white bg-[url('/images/bg-main-desktop.png')] bg-[length:400px_100%] relative bg-no-repeat bg-left z-0">
      <div className="max-w-screen-2xl mx-auto h-full grid grid-cols-[minmax(0,400px)_1fr]">
        <Card />
        <Form />
      </div>
    </section>
  );
};
