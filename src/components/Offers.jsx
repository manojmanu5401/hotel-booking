import Slider from "react-slick";

const offersList = [
  {
    id: "1",
    title: "For your next trip with us:",
    desc: "Get up to 40% OFF on hotel stays!",
  },
  {
    id: "2",
    title: "Enjoy our welcome offer",
    desc: "Get FLAT 20% OFF on 1st booking",
  },
  {
    id: "3",
    title: "The great getaway, your way",
    desc: "Save at least 15% on stays",
  },
  {
    id: "4",
    title: "FLAT 20% OFF on Booking!",
    desc: "Make payments with paytm",
  },
  {
    id: "5",
    title: "Stay for 4 Nights, Pay for 3",
    desc: "Grab this offer now",
  },
];

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Offers = () => {
  return (
    <>
      <section className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 mb-10 sm:mt-20">
        <div className="text-center mb-6">
          <h1 className="font-bold text-[40px]">Offers</h1>
        </div>
        <Slider {...settings}>
          {offersList.map((data) => {
            return (
              <div
                className=" p-6 bg-[#1D3557] rounded-lg shadow-lg"
                key={data.id}
              >
                <h5 className="mb-1 text-md font-bold tracking-tight text-white">
                  {data.title}
                </h5>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  {data.desc}
                </p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                  Claim
                  <span className="material-symbols-outlined ml-2">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Offers;
