import Find from "./Find";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-2 px-2 sm:px-6 lg:px-8 my-2">
        <div className="relative bg-banner w-full h-[32rem] rounded-[30px] bg-no-repeat bg-cover ">
          <div className="absolute w-full h-full rounded-[30px] bg-gradient-to-r from-slate-600 to-slate-50 mix-blend-multiply"></div>
          <div className="px-5 py-10 sm:px-10 sm:py-16">
            <h1 className="text-[50px] font-bold text-white  mix-blend-color-dodge sm:max-w-md">
              Enjoy Your Dream Vacation
            </h1>
            <h2 className="text-xl text-white mix-blend-color-dodge font-light sm:max-w-sm py-4">Unlock Extraordinary Experiences: Discover the World's Finest Hotels at Your Fingertips!</h2>
          </div>
          <Find/>
        </div>
      </div>
    </>
  );
};

export default Banner;
