import Find from "../components/SearchHotel";
import NavBar from "../components/NavBar";
import HotelsList from "../components/HotelsList";

const Hotels = () => {
  return (
    <>
      <NavBar />
      <section className="container mx-auto max-w-7xl py-2 px-8 my-5">
        <Find />
      </section>
      <section className="container mx-auto max-w-7xl py-2 px-5 my-5">
        <HotelsList />
      </section>
    </>
  );
};

export default Hotels;
