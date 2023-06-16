const Hotel = (props) => {
    const {name, price, city, imagePath, rating} = props;
  return (
    <>
      <div className="w-full mx-auto max-w-sm bg-white rounded-lg shadow-lg">
        <div className="w-full overflow-hidden rounded-t-lg">
        <a href="/as"><img className="rounded-t-lg transition-transform ease-in-out delay-100 hover:scale-150" src={imagePath} alt="" loading="lazy"/></a>
        </div>
        <div className="px-5 py-3">
          <div className="flex justify-between gap-x-2">
            <div>
              <h5 className="text-xl font-semibold tracking-tight text-gray-90">
                {name}
              </h5>
              <p>{city}</p>
            </div>
            <span className="text-xl font-bold text-[#1D3557]"><span>&#8377;</span> {price}</span>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            {
                [...Array(rating)].map((u,i)=>{
                    return <svg
                    key={u}
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                })
            }
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}.0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
