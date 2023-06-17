import Banner from "../components/Banner";
import Fotter from "../components/Footer";
import NavBar from "../components/NavBar";
import Offers from "../components/Offers";
import PopularHotels from "../components/PopularHotels";
import PopularPlaces from "../components/PopularPlaces";
import Subscribtion from "../components/Subscribtion";

const Home = () => {
    return  <>
    <NavBar/>
    <Banner/>
    <PopularHotels/>
    <PopularPlaces/>
    <Offers/>
    <Subscribtion/>
    <Fotter/>    
    </>
};

export default Home;
