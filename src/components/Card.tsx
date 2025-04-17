export const Card = () => {
  return (
    <>
      <div className="w-90 h-52 p-4 flex flex-col justify-end rounded-xl bg-[url('/images/bg-card-front.png')] absolute top-35 left-35 z-0">
        <div className="w-12 h-12 absolute top-5 left-8 rounded-full bg-white"></div>
        <div className="w-5 h-5 absolute top-9 left-24 rounded-full border border-white"></div>
        <p className="ml-4 text-white text-2xl font-semibold">
          1234 5465 0909 0909
        </p>
        <div className="ml-4 mt-5 mb-2 flex justify-between w-72">
          <p className="text-white text-xs uppercase">nome sobrenome</p>
          <p className="text-white text-xs">00/09</p>
        </div>
      </div>
      <div className="w-90 h-54 flex justify-end items-center rounded-xl bg-[url('/images/bg-card-back.png')] absolute top-95 left-60 z-0">
        <p className="pt-6 pr-4 tracking-widest text-white text-xs">000</p>
      </div>
    </>
  );
};
