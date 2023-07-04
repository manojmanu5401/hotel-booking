import PopularHotelCard from "./PopularHotelCard";

const PopularHotels = () => {
  const hotels = [
    {
      id:"BH1",
      name: "The Oberoi",
      city: "Bengalore",
      imagePath: "/images/bengalore/oberoi.jpg",
      price: "6000",
      rating: 5,
    },
    {
      id:"CH1",
      name: "Hyatt Regency",
      city: "Chennai",
      imagePath: "/images/chennai/hyatt.jpg",
      price: "4500",
      rating: 5,
    },
    {
      id:"JH7",
      name: "Samode Haveli",
      city: "Jaipur",
      imagePath: "/images/jaipur/samode.jpg",
      price: "4200",
      rating: 4,
    },
  ];

  return (
    <>
      <section className="container mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 mt-96 mb-10 sm:mt-28">
        <div className="relative mb-10 sm:after:content-[''] sm:after:bg-[#A8DADC] sm:after:w-full sm:after:h-60 sm:after:translate-y-[25%] sm:after:absolute sm:after:bottom-0 sm:after:inset-x-0 sm:after:z-[-1]  sm:after:mx-auto sm:after:rounded-[30px] sm:after:opacity-20">
          <div className="text-center mb-6">
            <h1 className="font-bold text-[40px]">Popular Hotels</h1>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-3 sm:mx-5">
            {hotels.map((hotel) => {
              return (
                <PopularHotelCard
                  key={hotel.id}
                  name={hotel.name}
                  city={hotel.city}
                  imagePath={hotel.imagePath}
                  price={hotel.price}
                  rating={hotel.rating}
                />
              );
            })}
          </div>
          <span className="material-symbols-outlined hidden sm:block sm:absolute sm:right-2/4 sm:first-letter:bottom-0 sm:translate-x-2/4 sm:translate-y-[80%] text-[45px] cursor-pointer">
            expand_circle_down
          </span>
        </div>
      </section>
    </>
  );
};

export default PopularHotels;
