import NavBar from "../components/NavBar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
import Carousel from "react-elastic-carousel";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import hotels from "../data/hotels";

const Hotel = () => {
  const hotel = useSelector((state) => state.hotel);
  const searchData = useSelector((state) => state.search);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [hotelData, setHotelData] = useState({});
  const date = new Date(searchData.checkIn);
  const propertyAmenities = [
    {
      icon: "local_parking",
      title: "Parking and transportation",
      data: [
        "Height restrictions apply for onsite parking",
        "Bus station shuttle (surcharge)",
        "Shopping center shuttle (surcharge)",
        "Free secured, covered self parking on site",
        "Free secured, covered valet parking on site",
        "Free secured, covered extended parking on site",
        "imited onsite parking",
        "Wheelchair-accessible parking available",
      ],
    },
    {
      icon: "wifi",
      title: "Internet",
      data: [
        "Available in all rooms: Free WiFi",
        "Available in some public areas: WiFi",
        "WiFi in public areas has a 3-device limit",
      ],
    },
    {
      icon: "diversity_1",
      title: "Family friendly",
      data: [
        "Babysitting (surcharge)",
        "Children's pool",
        "Free crib",
        "Laundry facilities",
        "Outdoor pool",
        "Rollaway/extra bed (surcharge)",
        "Snack bar/deli",
        "Supervised activities for children (surcharge)",
      ],
    },
    {
      icon: "restaurant_menu",
      title: "Food and drink",
      data: [
        "Daily buffet breakfast available for  fee",
        "2 bars/lounges",
        "2 restaurants",
        "Snack bar/deli",
      ],
    },
    {
      icon: "local_convenience_store",
      title: "Conveniences",
      data: [
        "24-hour front desk",
        "Free newspapers in lobby",
        "Gift shop/newsstand",
        "Hair salon",
        "Laundry facilities",
        "Luggage storage",
      ],
    },
    {
      icon: "spa",
      title: "Full-service spa",
      data: [
        "4 treatment rooms",
        "Aromatherapy",
        "Body scrubs",
        "Body wraps",
        "Couples treatment rooms",
        "Deep-tissue massages",
        "Detox wraps",
        "Facials",
        "Hot stone massages",
        "Manicures/pedicures",
        "Spa tub",
        "Steam room",
      ],
    },
  ];
  const roomAmenities = [
    {
      icon: "bed",
      title: "Bedroom",
      data: [
        "Blackout drapes",
        "Free crib",
        "Premium bedding",
        "Rollaway/extra bed (surcharge)",
      ],
    },
    {
      icon: "bathtub",
      title: "Bathroom",
      data: [
        "Bathrobes",
        "Bidet",
        "Deep soaking bathtub",
        "Free toiletries",
        "Hair dryer",
        "Hydromassage showerhead",
        "Private bathroom",
        "Separate bathtub and shower",
        "Slippers",
        "Toothbrush and toothpaste",
        "Towels",
      ],
    },
    {
      icon: "done",
      title: "Entertainment",
      data: ["37-inch LED TV with premium cable/satellite channels"],
    },
    {
      icon: "restaurant_menu",
      title: "Food and drink",
      data: [
        "24-hour room service",
        "Coffee/tea maker",
        "Cookware, dishware, and utensils",
        "Electric kettle",
        "Free bottled water",
        "Minibar",
        "Restaurant dining guides",
      ],
    },
    {
      icon: "done",
      title: "More",
      data: [
        "Air conditioning",
        "Connecting rooms available",
        "Desk",
        "Desk chair",
        "Electrical adapters",
        "Free daily newspapers",
        "Individual decor",
        "Individual furnishings",
        "Iron/ironing board",
        "Laptop workspace",
        "Laptop-compatible safe",
        "Phone",
        "Safe",
        "Separate sitting area",
      ],
    },
  ];
  const rooms = [
    {
      id: 1,
      name: "Deluxe Queen Bed Room - Sweet Bed",
      area: "366",
      sleeps: "2",
      bed: "1 Queen Bed",
      amount: 3000,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
    {
      id: 2,
      name: "Deluxe Twin Beds Room - Sweet Bed",
      area: "366",
      sleeps: "2",
      bed: "2 Twin Beds",
      amount: 3200,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
    {
      id: 3,
      name: "Deluxe King Bed Room - Sweet Bed",
      area: "366",
      sleeps: "3",
      bed: "1 King Bed",
      amount: 4000,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
    {
      id: 4,
      name: "Executive King Bed Room - Business Lounge Access",
      area: "366",
      sleeps: "3",
      bed: "1 King Bed",
      amount: 5500,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
    {
      id: 5,
      name: "Executive Queen Bed Room - Business Lounge Access",
      area: "366",
      sleeps: "2",
      bed: "1 Queen Bed",
      amount: 5000,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
    {
      id: 6,
      name: "Executive Twin Bed Room - Business Lounge Access",
      area: "366",
      sleeps: "2",
      bed: "2 Twin Beds",
      amount: 4500,
      amenities: [
        {
          icon: "wifi",
          name: "Free wifi",
        },
        {
          icon: "visibility",
          name: "City view",
        },
        {
          icon: "ac_unit",
          name: "Air conditioning",
        },
        {
          icon: "bathtub",
          name: "Private Bathroom",
        },
        {
          icon: "tv",
          name: "Flat-screen TV",
        },
        {
          icon: "volume_off",
          name: "Soundproof",
        },
      ],
    },
  ];
  const nearby = [
    {
      image: "zipline.jpg",
      title: "The Longest Zipline in the city: MUST TRY",
      distance: 0.8,
    },
    {
      image: "hillstation.jpg",
      title: "Discover the Enchanting Beauty of the hillstation",
      distance: 20,
    },
    {
      image: "mall.jpg",
      title: "Indulge in Retail Therapy and Luxury at Inorbit Mall",
      distance: 2,
    },
    {
      image: "market.jpg",
      title: "Uncover Hidden Treasures and Authentic Delights",
      distance: 0.8,
    },
    {
      image: "nationalpark.jpg",
      title: "Witness the Majestic Roar of the Jungle!",
      distance: 10,
    },
    {
      image: "waterpark.jpg",
      title: "Escape the Heat and Dive into Adventure at Wonderella",
      distance: 5,
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const getHotelDetails = () => {
    hotels
      .filter((hotelData) => hotelData.id === hotel.id)
      .map((hotelData) => setHotelData(hotelData));
  };

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    getHotelDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="relative">
        <NavBar />
        {hotel.id && (
          <div
            className="mx-auto mt-6 max-w-2xl grid-cols-3 sm:px-6 sm:grid sm:max-w-7xl lg:grid-cols-4 sm:gap-x-2 lg:px-8 cursor-pointer"
            onClick={() => setGalleryOpen(true)}
          >
            <div className="relative mx-2 sm:mx-0 aspect-h-4 aspect-w-3 overflow-hidden rounded-xl sm:rounded-lg sm:block sm:col-span-2">
              <img
                src={`/images${hotelData.image}`}
                alt=""
                className="h-full w-full object-cover object-center"
              />
              <div className="sm:hidden absolute bottom-2 flex gap-2 backdrop-blur-sm bg-black/50 text-white px-4 py-1 rounded-md right-2 text-2xl  justify-center items-center">
                <span className="material-symbols-outlined">
                  gallery_thumbnail
                </span>
                <p>8+</p>
              </div>
            </div>
            <div className="hidden sm:grid sm:grid-cols-1 sm:gap-y-2">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="/images/rooms/room1.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="/images/rooms/room2.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="lg:hidden absolute bottom-2 flex gap-2 backdrop-blur-sm bg-black/50 text-white px-4 py-1 rounded-md right-2 text-2xl  justify-center items-center">
                  <span className="material-symbols-outlined">
                    gallery_thumbnail
                  </span>
                  <p>6+</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid sm:grid-cols-1 sm:gap-y-2 overflow-hidden">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="/images/rooms/room3.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src="/images/rooms/room4.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className=" absolute bottom-2 flex gap-2 backdrop-blur-sm bg-black/50 text-white px-4 py-1 rounded-md right-2 text-2xl  justify-center items-center">
                  <span className="material-symbols-outlined">
                    gallery_thumbnail
                  </span>
                  <p>4+</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <Transition appear show={galleryOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setGalleryOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-7xl z-10">
                    <div className="relative overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8 outline-none"
                        onClick={() => setGalleryOpen(false)}
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                      <div className="">
                        <h1 className="text-lg mb-10">All photos</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[32rem] overflow-y-scroll px-2">
                          <img
                            src="/images/rooms/room1.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room2.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room3.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room4.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room5.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room6.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room7.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room8.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room9.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room10.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                          <img
                            src="/images/rooms/room11.jpg"
                            className="rounded-lg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition appear show={isAmenitiesOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsAmenitiesOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="transform text-left text-base transition md:my-8 md:px-4 min-w-full lg:min-w-[50rem] z-10">
                    <div className="relative overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8 outline-none"
                        onClick={() => setIsAmenitiesOpen(false)}
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                      <div className="">
                        <h1 className="text-lg mb-10 ">Property amenities</h1>
                        <div className="max-h-[32rem] overflow-y-scroll">
                          <h1 className="text-xl font-bold my-3 text-[#1d3557]">
                            Top family friendly amenities
                          </h1>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-md">
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined items-center">
                                done
                              </span>
                              <p>Extra beds/cribs</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined items-center">
                                crib
                              </span>
                              <p>Babysitting</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined items-center">
                                done
                              </span>
                              <p>Kids pool</p>
                            </div>
                          </div>

                          <h1 className="text-xl font-bold my-3 text-[#1d3557]">
                            Popular amenities
                          </h1>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-md">
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined items-center">
                                pool
                              </span>
                              <p>Pool</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                spa
                              </span>
                              <p>Spa</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                local_parking
                              </span>
                              <p>Parking</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                wifi
                              </span>
                              <p>Free Wifi</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                ac_unit
                              </span>
                              <p>Air Conditioning</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                restaurant_menu
                              </span>
                              <p>Restaurant</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                fitness_center
                              </span>
                              <p>Gym</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                local_cafe
                              </span>
                              <p>Breakfast available</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                work
                              </span>
                              <p>Business services</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                local_bar
                              </span>
                              <p>Bar</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                local_laundry_service
                              </span>
                              <p>Laundry</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                room_service
                              </span>
                              <p>Room service</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                done
                              </span>
                              <p>Housekeeping</p>
                            </div>
                            <div className="flex gap-2">
                              <span className="material-symbols-outlined">
                                desk
                              </span>
                              <p>24/7 front desk</p>
                            </div>
                          </div>

                          {propertyAmenities.map((amenity) => {
                            return (
                              <div key={amenity.title}>
                                <h1 className="text-xl font-bold my-3 text-[#1d3557]">
                                  {amenity.title}
                                </h1>
                                <ul className="list-disc list-inside mb-5 leading-loose text-sm">
                                  {amenity.data.map((text) => (
                                    <li key={amenity.title}>{text}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {hotel.id ? (
        <div className="relative hotel">
          <div className="sticky top-0 mt-2 bg-white z-10 sm:text-md font-medium text-center text-gray-500">
            <div className="max-w-7xl mx-auto px-6">
              <ul className="flex gap-2 flex-wrap -mb-px border-b">
                <li className="mr-2">
                  <a
                    href="#overview"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#1d3557] hover:border-[#1d3557]"
                    data-to-scrollspy-id="overview"
                    onClick={onPress}
                  >
                    Overview
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#room"
                    className="inline-block p-4 border-b-2 border-transparent hover:text-[#1d3557] hover:border-[#1d3557] rounded-t-lg"
                    data-to-scrollspy-id="room"
                    onClick={onPress}
                  >
                    Rooms
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#location"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#1d3557] hover:border-[#1d3557]"
                    data-to-scrollspy-id="location"
                    onClick={onPress}
                  >
                    Location
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#amenities"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#1d3557] hover:border-[#1d3557]"
                    data-to-scrollspy-id="amenities"
                    onClick={onPress}
                  >
                    Amenities
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#policy"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#1d3557] hover:border-[#1d3557] "
                    data-to-scrollspy-id="policy"
                    onClick={onPress}
                  >
                    Policis
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ScrollSpy scrollThrottle={100} offsetBottom={300}>
            <section id="overview" className="max-w-7xl mx-auto px-6 pt-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="col-span-2">
                  <h1 className="font-bold text-4xl">{hotelData.name}</h1>
                  {[...Array(hotelData.stars)].map((u, i) => {
                    return (
                      <span
                        key={i}
                        className="material-symbols-outlined w-5 h-5 text-yellow-300 mr-1"
                      >
                        star
                      </span>
                    );
                  })}

                  <div className="flex gap-2 items-center mb-8">
                    <p className="bg-[#1D3557] text-white p-1 rounded-t-md rounded-br-lg text-sm">
                      {hotelData.rating}
                    </p>
                    <p className="font-bold text-sm">Excelllent</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-3">
                      Popular amenities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined items-center">
                          pool
                        </span>
                        <p>Pool</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined">spa</span>
                        <p>Spa</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined">
                          local_parking
                        </span>
                        <p>Parking</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined">wifi</span>
                        <p>Free Wifi</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined">
                          ac_unit
                        </span>
                        <p>Air Conditioning</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined">
                          restaurant_menu
                        </span>
                        <p>Restaurant</p>
                      </div>
                      <div
                        className="flex gap-2 text-blue-700 items-center cursor-pointer"
                        onClick={() => setIsAmenitiesOpen(true)}
                      >
                        <p>See All</p>
                        <span className="material-symbols-outlined">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <iframe
                    title="hotel"
                    className="rounded-lg w-full"
                    src={hotelData.location}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <p className="text-sm">{hotelData.address}</p>
                </div>
              </div>
            </section>
            <section id="room" className="max-w-7xl mx-auto px-6 pt-14">
              <h1 className="font-bold text-4xl">Choose your room</h1>
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-5 my-5">
                {rooms.map((room) => {
                  return (
                    <div
                      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                      key={room.id}
                    >
                      <Carousel
                        itemsToScroll={1}
                        itemsToShow={1}
                        showArrows={false}
                      >
                        <img
                          class="rounded-t-lg"
                          src="/images/rooms/room1.jpg"
                          alt=""
                        />
                        <img
                          class="rounded-t-lg"
                          src="/images/rooms/room2.jpg"
                          alt=""
                        />
                        <img
                          class="rounded-t-lg"
                          src="/images/rooms/room3.jpg"
                          alt=""
                        />
                        <img
                          class="rounded-t-lg"
                          src="/images/rooms/room4.jpg"
                          alt=""
                        />
                      </Carousel>
                      <div class="px-5 py-3">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-[#1d3557]">
                          {room.name}
                        </h5>
                        <div className="mb-3 text-md font-normal text-gray-500 grid grid-cols-1 gap-2">
                          <div className="flex gap-2 items-center">
                            <span className="material-symbols-outlined">
                              square_foot
                            </span>
                            <p>{room.area} sqft</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <span className="material-symbols-outlined">
                              group
                            </span>
                            <p>Sleeps {room.sleeps}</p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <span className="material-symbols-outlined">
                              bed
                            </span>
                            <p>{room.bed}</p>
                          </div>
                        </div>
                        <hr></hr>
                      </div>
                      <div className="px-5 py-3">
                        <div className="flex gap-1 items-start text-sm text-green-700">
                          <span className="material-symbols-outlined">
                            done
                          </span>
                          <p className="">
                            <span className="font-bold">Free cancelation </span>
                            until 05:59 PM on {date.toDateString().slice(0,-5)}
                          </p>
                        </div>
                        <div className="flex gap-1 items-start text-sm text-green-700">
                          <span className="material-symbols-outlined">
                            done
                          </span>
                          <p className="">
                            <span className="font-bold">
                              No payment needed -{" "}
                            </span>
                            pay at the property
                          </p>
                        </div>
                        <div className="my-2">
                          {room.amenities.map((amenity) => {
                            return (
                              <div
                                className="flex gap-2 text-sm mb-1"
                                key={amenity.name}
                              >
                                <span className="material-symbols-outlined  text-sm">
                                  {amenity.icon}
                                </span>
                                <p>{amenity.name}</p>
                              </div>
                            );
                          })}
                        </div>
                        <hr></hr>
                      </div>
                      <div className="flex items-end justify-between px-5  py-3">
                        <div>
                          <p className="text-sm">
                            Price for {searchData.days} nights,{" "}
                            {searchData.guests} adults
                          </p>
                          <p className="text-xl font-bold">
                            ₹{room.amount * searchData.days}
                          </p>
                          <p className="text-xs text-gray-400">
                            + ₹767 taxes and fees
                          </p>
                        </div>
                        <button className="button bg-[#1D3557] px-4 rounded-lg text-white py-2 mt-1 text-sm">
                          Reserve
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section id="location" className="max-w-7xl mx-auto px-6 pt-14">
              <h1 className="font-bold text-4xl">About this property</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
                <div className="">
                  <h2 className="text-xl">{hotelData.name}</h2>
                  <p className="mt-3 tracking-wide text-justify">
                    {hotelData.about}
                  </p>
                </div>
                <iframe
                  title="hotel"
                  className="rounded-lg w-full h-80"
                  src={hotelData.location}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h1 className="font-bold text-xl mt-10">
                Popular things to do nearby
              </h1>
              <Carousel
                breakPoints={breakPoints}
                pagination={false}
                className="my-5"
              >
                {nearby.map((x) => {
                  return (
                    <div class="md:max-w-[14rem] xl:max-w-[17rem] bg-white border border-gray-200 rounded-lg shadow ">
                      <img
                        class="rounded-t-lg"
                        src={`/images/nearby/${x.image}`}
                        alt=""
                      />
                      <div class="p-5">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 ">
                          {x.title}
                        </h5>

                        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                          {x.distance} miles away
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </section>
            <section id="amenities" className="max-w-7xl mx-auto px-6 pt-14">
              <h1 className="font-bold text-4xl">Amenities</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
                <h1 className="font-bold text-xl mb-5 sm:mb-0">
                  Property amenities
                </h1>
                <div>
                  {propertyAmenities.map((amenity) => {
                    return (
                      <div className="mb-5" key={amenity.title}>
                        <div className="flex gap-4 font-bold text-[#1d3557] text-xl items-center">
                          <span className="material-symbols-outlined text-xl">
                            {amenity.icon}
                          </span>
                          <p>{amenity.title}</p>
                        </div>
                        <ul className="list-disc list-inside leading-loose text-md pl-10">
                          {amenity.data.map((text) => (
                            <li key={text}>{text}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr></hr>
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-10">
                <h1 className="font-bold text-xl mb-5 sm:mb-0">
                  Room amenities
                </h1>
                <div>
                  {roomAmenities.map((amenity) => {
                    return (
                      <div className="mb-5" key={amenity.title}>
                        <div className="flex gap-4 font-bold text-[#1d3557] text-xl items-center">
                          <span className="material-symbols-outlined text-xl">
                            {amenity.icon}
                          </span>
                          <p>{amenity.title}</p>
                        </div>
                        <ul className="list-disc list-inside leading-loose text-md pl-10">
                          {amenity.data.map((text) => (
                            <li key={text}>{text}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <section id="policy" className="max-w-7xl mx-auto px-6 py-14">
              <h1 className="font-bold text-4xl">Policies</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2  my-7">
                <div>
                  <h2 className="text-xl font-bold mb-3">Check-in</h2>
                  <ul className="leading-loose text-sm">
                    <li>Check-in from 3:00 PM - anytime</li>
                    <li>Early check-in subject to availability</li>
                    <li>Early check-in is available for a fee</li>
                    <l>Minimum check-in age: 18</l>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Check-out</h2>
                  <ul className="leading-loose text-sm">
                    <li>Check-out before noon</li>
                    <li>Late check-out subject to availability</li>
                    <li>A late check-out fee will be charged</li>
                    <l>Express check-out available</l>
                  </ul>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-3">
                Special check-in instructions
              </h2>
              <ul className="leading-loose text-sm mb-3">
                <li>
                  This property offers transfers from the train station
                  (surcharges may apply); to arrange pick-up, guests must
                  contact the property 24 hours prior to arrival, using the
                  contact information on the booking confirmation
                </li>
                <li>Front desk staff will greet guests on arrival</li>
              </ul>
              <h2 className="text-xl font-bold mb-3">Access methods</h2>
              <ul className="leading-loose text-sm mb-3">
                <li>Staffed front desk, smart lock</li>
              </ul>
              <h2 className="text-xl font-bold mb-3">Pets</h2>
              <ul className="leading-loose text-sm mb-3">
                <li>No pets or service animals allowed</li>
              </ul>
              <h2 className="text-xl font-bold mb-3">
                Children and extra beds
              </h2>
              <ul className="leading-loose text-sm mb-3">
                <li>Children are welcome</li>
                <li>
                  Rollaway/extra beds are available for INR 1700.0 per night
                </li>
                <li>Free cribs are available on request at the property</li>
              </ul>
              <h2 className="text-xl font-bold mb-3">Property payment types</h2>
              <div className="flex gap-4">
                <img src="/images/express.png" alt="" width="50" />
                <img src="/images/mastercard.jpg" alt="" width="50" />
                <img src="/images/visa.png" alt="" width="50" />
              </div>
            </section>
          </ScrollSpy>
        </div>
      ) : (
        <h1 className="text-center mt-10 text-lg font-bold text-stone-300">
          No Rooms found
        </h1>
      )}

      <Footer />
    </>
  );
};
export default Hotel;
//
