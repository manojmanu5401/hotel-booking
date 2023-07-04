
const PopularHotelCard = (props) => {
  const { name, price, city, imagePath, rating } = props;
  return (
    <>
      <div className="w-full mx-auto max-w-sm bg-white rounded-lg shadow-lg">
        <div className="w-full overflow-hidden rounded-t-lg">
          <a href="/#">
            <img
              className="rounded-t-lg transition-transform ease-in-out delay-100 hover:scale-150"
              src={imagePath}
              alt=""
              loading="lazy"
            />
          </a>
        </div>
        <div className="px-5 py-3">
          <div className="flex justify-between gap-x-2">
            <div>
              <h5 className="md:text-sm lg:text-xl font-semibold text-gray-90">
                {name}
              </h5>
              <p>{city}</p>
            </div>
            <span className="md:text-sm lg:text-xl font-bold text-[#1D3557]">
              <span>&#8377;</span> {price}
            </span>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="stars">
              {[...Array(rating)].map((u, i) => {
                return (
                  <span
                    key={u}
                    className="md:text-sm lg:text-lg md:mr-0 material-symbols-outlined w-5 h-5 text-yellow-300 mr-1"
                  >
                    star
                  </span>
                );
              })}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}.0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularHotelCard;
