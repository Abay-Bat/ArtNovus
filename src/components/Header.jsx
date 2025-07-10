import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import header_logo from "../assets/header_logo.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
const Header = () => {
  const { hash } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50
    border-b border-transparent lg:bg-n-8/90
    lg:backdrop-blur-sm ${
      openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
    }`}
    >
      <div
        className="flex items-center px-5 lg:px-7.5
      xl:px-10 max-lg:py-4"
      >
        <a className="block w-[12rem] xl-mr-8" href="#hero">
          <img src={header_logo} width={230} height={40} alt="Header_logo" />
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0
        right-0 bottom-0 bg-n-8 lg:static lg:flex
        lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col
        items-center justify-center m-auto 
        lg:flex-row  "
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code
                text-2xl uppercase text-n-1
                transition-colors hover:text-purple-500 
                ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25
                 lg:text-xs lg:font-semibold ${
                   item.url === hash
                     ? "z-2 text-3xl lg:text-sm lg:text-white"
                     : "text-2xl lg:text-xs lg:text-gray-500"
                 } lg:leading-5 lg:hover:text-white 
                 xl: px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

 
        <Button
          className="hidden lg:flex"
          href="https://www.instagram.com/artnovus_kz?igsh=aHJxdW54MXRhdmMw&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
