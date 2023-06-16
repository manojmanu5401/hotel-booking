import Banner from "../components/Banner";
import Fotter from "../components/Footer";
import NavBar from "../components/NavBar";
import PopularHotels from "../components/PopularHotels";
import PopularPlaces from "../components/PopularPlaces";
import Subscribtion from "../components/Subscribtion";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return  <>
    <NavBar/>
    <Banner/>
    <PopularHotels/>
    <PopularPlaces/>
    <Subscribtion/>
    <Testimonials/>
    <Fotter/>
    </>
};

export default Home;
