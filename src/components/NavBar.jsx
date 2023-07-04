import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const NavBar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <header
        className={`sticky top-0 z-10 transition ease-in-out delay-50 ${
          scrollPosition > 0 ? "drop-shadow-lg" : "drop-shadow-none"
        } `}
      >
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                    <div className="flex flex-shrink-0 items-center">
                      <Link to="/" className="flex items-center">
                        <img src="/logo2.png" width="50" alt=""/>
                        <h1 className="text-2xl font-bold">TravelNest</h1>
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 justify-center items-center">
                        <div className="flex space-x-4 items-center">
                          <h2 className="font-bold">IN</h2>
                          <img
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src="/images/flag.png"
                            alt=""
                          />
                        </div>
                        <Link
                          className="button bg-[#1D3557] px-4 rounded-lg text-white py-2"
                          to="/login"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center text-gray-400">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <span
                          className="material-symbols-outlined block h-6 w-6"
                          aria-hidden="true"
                        >
                          close
                        </span>
                      ) : (
                        <span
                          className="material-symbols-outlined block h-6 w-6"
                          aria-hidden="true"
                        >
                          menu
                        </span>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <div className="flex space-x-4 justify-center items-center">
                    <div className="flex space-x-4 items-center">
                      <h2 className="font-bold">IN</h2>
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="/images/flag.png"
                        alt=""
                      />
                    </div>
                    <Link
                      className="button bg-[#1D3557] px-4 rounded-lg text-white py-2"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
};

export default NavBar;
