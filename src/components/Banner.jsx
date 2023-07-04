import SearchHotel from "./SearchHotel";

const Banner = (props) => {
  const {title, desc, banner} = props;
  return (
    <>
      <section className="container mx-auto max-w-7xl py-2 px-2 xl:px-5 my-2">
        <div className={`relative ${banner} w-full h-[30rem] rounded-[30px] bg-no-repeat bg-cover `}>
          <div className="absolute w-full h-full rounded-[30px] bg-gradient-to-r from-slate-600 to-slate-50 mix-blend-multiply"></div>
          <div className="px-5 py-10 sm:px-10 sm:py-16">
            <h1 className="text-[50px] font-bold text-white  mix-blend-color-dodge sm:max-w-md">
              {title}
            </h1>
            <h2 className="text-xl text-white mix-blend-color-dodge font-light sm:max-w-sm py-4">
             {desc}
            </h2>
          </div>
          <div className="absolute w-10/12 sm:w-11/12 mx-auto right-2/4 bottom-0 translate-x-2/4 translate-y-[80%] sm:translate-y-[60%]">
            <SearchHotel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
