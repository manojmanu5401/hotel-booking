import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../state/searchSlice";
import { useNavigate } from "react-router-dom";


const Find = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  console.log(search);
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [minCheckOutDate, setMinCheckOutDate] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState(null);

  const handleCheckInDate = (e) => {
    setCheckInDate(e.target.value);
    updateMinCheckOutDate(e.target.value);
    setCheckOutDate(null);
  };

  const updateMinCheckOutDate = (date)=>{
    const today = new Date(date);
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    var year = tomorrow.getFullYear();
    var month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    var day = String(tomorrow.getDate()).padStart(2, '0');
  
    var tomorrowDate = year + '-' + month + '-' + day;
    setMinCheckOutDate(tomorrowDate);
  }

  const handleCheckOutDate = (e) => {
    setCheckOutDate(e.target.value);
  };

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = year + '-' + month + '-' + day;
    setDate(formattedDate);
    updateMinCheckOutDate(formattedDate);
  };

  useEffect(() => {
    getTodayDate();
    // eslint-disable-next-line
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    var start = new Date(e.target.checkin.value);
    var end = new Date(e.target.checkout.value);
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const data = {
      location: location,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guests,
      days: days
    };
    dispatch(setSearchItem(data));
    navigate("/hotels");
  };

  return (
    <>
      <div className="mx-auto rounded-3xl px-5 py-5 bg-white drop-shadow-xl">
        <form
          onSubmit={submitSearch}
          className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-5 sm:divide-x"
        >
          <div>
            <label
              htmlFor="location"
              className="block ml-3 text-sm font-semibold leading-6 text-gray-900"
            >
              Location
            </label>
            <div className="">
              <input
                type="text"
                name="location"
                defaultValue={search.location}
                id="location"
                onChange={(e)=>{setLocation(e.target.value)}}
                placeholder="Where are you going ?"
                className="block w-full rounded-md border-transparent px-3.5 py-2 text-gray-900 focus:ring-0 focus:ring-offset-0 focus:outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="checkin"
              className="ml-3 block text-sm font-semibold leading-6 text-gray-900"
            >
              Check-In
            </label>
            <div className="">
              <input
                type="date"
                name="checkin"
                id="checkin"
                defaultValue={search.checkIn}
                selected={checkInDate}
                min={date}
                onChange={handleCheckInDate}
                className="block w-full rounded-md border-transparent px-3.5 py-2 text-gray-900 focus:ring-0 focus:ring-offset-0 focus:outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="checkout"
              className="ml-3 block text-sm font-semibold leading-6 text-gray-900"
            >
              Check-Out
            </label>
            <div className="">
              <input
                type="date"
                name="checkout"
                defaultValue={search.checkOut}
                selected={checkOutDate}
                min={minCheckOutDate}
                onChange={handleCheckOutDate}
                id="checkout"
                className="block w-full rounded-md border-transparent px-3.5 py-2 text-gray-900 focus:ring-0 focus:ring-offset-0 focus:outline-0  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block ml-3 text-sm font-semibold leading-6 text-gray-900"
            >
              Guests
            </label>
            <div className="">
              <input
                type="number"
                name="guests"
                id="guests"
                defaultValue={search.guests}
                min="1"
                max="10"
                onChange={(e)=>{setGuests(e.target.value)}}
                placeholder="Add number of guests"
                className="block w-full rounded-md border-transparent px-3.5 py-2 text-gray-900 focus:ring-0 focus:ring-offset-0 focus:outline-0  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="button bg-[#1D3557] px-4 py-4 sm:py-2 rounded-lg text-white"
          >
            Check Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Find;
