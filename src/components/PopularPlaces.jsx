const PopularPlaces = () => {
  return (
    <>
      <section className="container mx-auto max-w-7xl py-2 px-2 sm:px-6 lg:px-8 mb-10 sm:mt-24">
        <div className="text-center mb-6">
          <h1 className="font-bold text-[40px]">Popular Places</h1>
        </div>
        <div className="w-full max-w-7xl p-5 pb-10 columns-1 mx-auto mb-10 gap-5 sm:columns-3 space-y-5">
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/delhi.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Delhi
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/mumbai.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Mumbai
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/hydrabad.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Hydrabad
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/jaipur.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Jaipur
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/chennai.jpg" alt=""loading="lazy" />
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Chennai
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/bengalore.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Bengalore
            </h1>
          </div>
          <div className="relative ">
            <a href="/">
              <img className="rounded-xl hover:opacity-75" src="/images/places/kolkata.jpg" alt="" loading="lazy"/>
            </a>
            <h1 className="absolute text-lg font-[500px] text-white bottom-3 left-5 backdrop-blur-sm bg-white/30 rounded-full px-4">
              Kolkata
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularPlaces;
