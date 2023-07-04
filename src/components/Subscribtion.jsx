const Subscribtion = () => {
  return (
    <>
      <section className="isolate bg-[#EEF8F8] py-16 sm:py-10 mb-10 lg:my-36 px-10 xl:px-5">
        <div className="container mx-auto max-w-7xl px-8 lg:px-10 bg-white py-24 rounded-[20px] relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-[#1D3557] sm:text-4xl">
                Subscribe to our TravelNest.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Joining Rewards and discover amazing discounts on your bookings.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-x-4 gap-y-4 sm:gap-y-0">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-2 focus:ring-0 focus:ring-offset-0 focus:outline-0 border-solid  border-[#1D3557] px-3.5 py-2 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#1D3557] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="overflow-hidden absolute bottom-0 right-0 xl:right-5 hidden lg:block">
                <img src="/images/travel.png" className="lg:w-[32rem]" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribtion;
