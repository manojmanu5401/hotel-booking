import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import HotelCard from "../components/HotelCard";
import places from "../data/places";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Filter from "./Filter";

const sortOptions = [
  { id: "1", name: "Price: Low to High", current: false },
  { id: "2", name: "Price: High to Low", current: false },
];
const starFilter = [
  { value: "5", label: "5 Star", checked: false },
  { value: "4", label: "4 Star", checked: false },
  { value: "3", label: "3 Star", checked: false },
];
const priceFilter = [
  { min: "0", value: "0", max: "2000", label: "₹ 0 - ₹ 2000", checked: false },
  {
    min: "2000",
    value: "2000",
    max: "3500",
    label: "₹ 2000 - ₹ 3500",
    checked: false,
  },
  {
    min: "3500",
    value: "3500",
    max: "5000",
    label: "₹ 3500 - ₹ 5000",
    checked: false,
  },
  {
    min: "5000",
    value: "5000",
    max: "6500",
    label: "₹ 5000 - ₹ 6500",
    checked: false,
  },
  {
    min: "6500",
    value: "6500",
    max: "10000000000000000000",
    label: "> ₹ 6000",
    checked: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HotelsList = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const search = useSelector((state) => state.search);
  const [hotels, setHotels] = useState(places);
  const [sortCatogery, setSortCatogery] = useState(null);
  const [rating, setRating] = useState(starFilter);
  const [price, setPrice] = useState(priceFilter);

  const handleSortFilter = (id) => {
    setSortCatogery(id);
  };
  const filterOptions = () => {
    let updatedList = structuredClone(places);
    updatedList = updatedList
      .filter((place) => search.location === place.placeName)
      .map((x) => x);
    console.log("before updated", updatedList);

    //sort  filter
    if (sortCatogery) {
      if (sortCatogery === "1") {
        updatedList[0].hotels.sort(
          (a, b) =>
            parseInt(a.amount) * parseInt(search.days) -
            (a.isOffer ? 2000 : 0) -
            (parseInt(b.amount) * parseInt(search.days) -
              (b.isOffer ? 2000 : 0))
        );
      }
      if (sortCatogery === "2") {
        updatedList[0].hotels.sort(
          (a, b) =>
            parseFloat(b.amount) * parseFloat(search.days) -
            (b.isOffer ? 2000 : 0) -
            parseFloat(a.amount) * parseFloat(search.days) -
            (a.isOffer ? 2000 : 0)
        );
      }
      sortOptions.forEach((option) => {
        if (option.id === sortCatogery) option.current = true;
        else option.current = false;
      });
    }

    //star  filter
    const starsChecked = rating
      .filter((item) => item.checked)
      .map((item) => parseInt(item.value));
    if (starsChecked.length) {
      updatedList[0].hotels = updatedList[0].hotels
        .filter((item) => starsChecked.includes(item.stars))
        .map((item) => item);
    }

    //price filter
    const priceCheckd = price
      .filter((item) => item.checked)
      .map((item) => item);
    if (priceCheckd.length) {
      console.log(
        parseInt(priceCheckd[0].min),
        priceCheckd[priceCheckd.length - 1].max
      );
      updatedList[0].hotels = updatedList[0].hotels
        .filter(
          (item) =>
            parseInt(item.amount) >= priceCheckd[0].min &&
            parseInt(item.amount) <= priceCheckd[priceCheckd.length - 1].max
        )
        .map((item) => item);
    }
    console.log("after update", updatedList);
    setHotels(updatedList);
  };
  const handleStarFilter = (e) => {
    const starFilterStateData = rating;
    const changeCheckedStar = starFilterStateData.map((item) =>
      item.value === e.target.value
        ? { ...item, checked: e.target.checked }
        : item
    );
    setRating(changeCheckedStar);
  };
  const handlePriceFilter = (e) => {
    const priceFilterStateData = price;
    const changeCheckedPrice = priceFilterStateData.map((item) =>
      item.value === e.target.value
        ? { ...item, checked: e.target.checked }
        : item
    );
    setPrice(changeCheckedPrice);
  };

  useEffect(() => {
    filterOptions();
    // eslint-disable-next-line
  }, [search, sortCatogery, rating, price]);

  return (
    <>
      <div className="bg-white">
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <span
                          className="material-symbols-outlined block h-6 w-6"
                          aria-hidden="true"
                        >
                          close
                        </span>
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-10 border-t border-gray-200 p-5">
                      <h3 className="sr-only">Categories</h3>
                      <Filter
                      options={priceFilter}
                      handleMethod={handlePriceFilter}
                      title="Price per Night"
                    />
                    <Filter
                      options={starFilter}
                      handleMethod={handleStarFilter}
                      title={"Star Catogery"}
                    />
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          {search.location &&
          search.checkIn &&
          search.checkOut &&
          search.guests ? (
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-72 sm:mt-0">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Showing Properties in {search.location}
                </h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <span className="material-symbols-outlined -mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
                          expand_more
                        </span>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.id}>
                              {({ active }) => (
                                <p
                                  onClick={() => handleSortFilter(option.id)}
                                  className={classNames(
                                    option.current
                                      ? "font-medium text-gray-900"
                                      : "text-gray-500",
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm cursor-pointer"
                                  )}
                                >
                                  {option.name}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <span className="material-symbols-outlined h-5 w-5">
                      filter_alt
                    </span>
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="text-lg font-bold">Select Filters</h3>
                    <Filter
                      options={priceFilter}
                      handleMethod={handlePriceFilter}
                      title="Price per Night"
                    />
                    <Filter
                      options={starFilter}
                      handleMethod={handleStarFilter}
                      title={"Star Catogery"}
                    />
                  </form>
                  {hotels.length && hotels[0].hotels.length ? (
                    <motion.div layout className="lg:col-span-3">
                      {hotels
                        .filter((place) => search.location === place.placeName)
                        .map((place) =>
                          place.hotels.map((hotel) => {
                            return <HotelCard hotel={hotel} key={hotel.id} />;
                          })
                        )}
                    </motion.div>
                  ) : (
                    <h1 className="text-center mt-10 text-lg font-bold text-stone-300 lg:col-span-3">
                      No Properties Found
                    </h1>
                  )}
                </div>
              </section>
            </main>
          ) : (
            <h1 className="text-center mt-10 text-lg font-bold text-stone-300">
              No Properties Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
};
export default HotelsList;
