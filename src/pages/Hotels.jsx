import SearchHotel from "../components/SearchHotel";
import NavBar from "../components/NavBar";
import HotelsList from "../components/HotelsList";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import places from "../data/places";
import Fotter from "../components/Footer";

const Hotels = () => {
  const search = useSelector((state) => state.search);
  return (
    <>
      <NavBar />
      {search.location && search.checkIn && search.checkOut && search.guests ? (
        places.filter(place => search.location===place.placeName)
        .map(place =><Banner key={place.id} title={place.placeName} desc={place.description}  banner={place.image}/>)
      ) : (
        <section className="container mx-auto max-w-7xl py-2 px-8 my-5">
          <SearchHotel />
        </section>
      )}

      <section className="container mx-auto max-w-7xl py-2 px-5 my-5">
        <HotelsList />
      </section>
      <Fotter/>
    </>
  );
};

export default Hotels;
