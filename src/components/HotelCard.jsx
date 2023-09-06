import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {sethotelId} from "../state/hotelSlice"
import  {motion}  from  'framer-motion'


const HotelCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const {
    id,
    name,
    rating,
    stars,
    description,
    breakfast,
    cancellationPolicy,
    taxAmount,
    amount,
    image,
    isOffer,
    offer,
  } = props.hotel;

  const availability =(e)=>{
    e.preventDefault();
    dispatch(sethotelId({id:id}))
    navigate('/hotel')      
  }
  return (
    <>
      <motion.div layout className="mx-auto border border-[#eee] w-100 h-max rounded-lg p-4 mb-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <img
            src={`/images/${image}`}
            className="rounded-lg max-w-xs"
            alt=""
          />
          <div className="max-w-xs grow">
            <h1 className="font-bold text-[25px]  text-blue-800">{name}</h1>
            <div className="stars">
              {[...Array(stars)].map((u, i) => {
                return (
                  <span
                    key={i}
                    className="material-symbols-outlined w-5 h-5 text-yellow-300 mr-1"
                  >
                    star
                  </span>
                );
              })}
            </div>
            <p className="text-sm">{description}</p>

            <div className="mt-5">
              <p
                className={`text-sm font-bold text-green-700 ${
                  !breakfast ? "hidden" : ""
                }`}
              >
                Breakfast included
              </p>

              <p
                className={`text-sm font-bold text-green-700 ${
                  !cancellationPolicy ? "hidden" : ""
                }`}
              >
                FREE cancellation
              </p>
              <span
                className={`text-sm font-bold text-green-700 ${
                  !cancellationPolicy ? "hidden" : ""
                }`}
              >
                You can cancel later, so lock in this great price today!
              </span>
            </div>
          </div>
          <div className="grow sm:text-end flex flex-col justify-between">
            <div className="flex justify-end gap-2 items-center mb-8">
              <p className="font-bold text-sm">Excelllent</p>
              <p className="bg-[#1D3557] text-white p-1 rounded-t-md rounded-br-lg text-sm">
                {rating}
              </p>
            </div>
            <div>
              <p className="text-xs">
                {search.days} night, {search.guests} adults
              </p>
              <h3
                className={`line-through text-[#E63946] text-sm ${
                  !isOffer ? "hidden" : " "
                }`}
              >
                ₹{search.days * amount}
              </h3>
              <h1 className="text-lg font-bold text-[#1D3557]">
                ₹
                {!isOffer
                  ? search.days * amount
                  : search.days * amount -
                    2000}
              </h1>
              <p className="text-[#9DB2BF] text-xs">
                + ₹{taxAmount} taxes & fees
              </p>
              <p className="text-[#526D82] font-bold text-sm">Per Night</p>
              <p className="text-xs">
                starts at <span className="font-bold text-lg">₹{amount}</span>
              </p>
              <form onSubmit={availability}>
                <button type="submit" className="button bg-[#1D3557] px-4 rounded-lg text-white py-2 mt-1 text-sm">
                See availability
              </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`offfer w-100 bg-green-100 mt-3 rounded-md p-3 flex gap-2 ${
            !isOffer ? "hidden" : " "
          }`}
        >
          <span className="material-symbols-outlined text-green-700 text-md">
            info
          </span>
          <p className="text-green-700 font-bold text-md">{offer}</p>
        </div>
      </motion.div>
    </>
  );
};
export default HotelCard;
