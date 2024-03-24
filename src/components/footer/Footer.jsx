import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import FooterLogo from "../../../public/assets/images/logo.svg";

const navigation = [
  { name: "Home" },
  { name: "About" },
  { name: "Product & Services" },
  { name: "HSE & Qualities" },
  { name: "Careers" },
];

const sitemaps = [
  { name: "Publications" },
  { name: "FAQ" },
  { name: "Contact Us" },
  { name: "Price" },
];

const addresses = [
  {
    address:
      "Brakwatso Loop, 1st Nii Nmai Street. Hse N0. 51. Off Adjiringanor Road - P.O. Box BT182. Comm. 2 Tema",
    phoneNumber: "+233 2683 73286",
    country: "Ghana, Tema",
    email: "info@nenserpetroleum.com",
  },
];

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8   ">
        <div className="sm:flex sm:flex-wrap  md:py-4 items-start">
          <ExportedImage
            src={FooterLogo}
            width={200}
            height={150}
            alt="nenser"
            className=""
          />
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 ml-5 ">
            <h5 className="text-xl font-bold mb-6 text-gray-800">Navigation</h5>
            {navigation.map((navitem) => (
              <li key={navitem.name} className="list-none footer-links mb-6">
                <Link
                  href="#"
                  className=" text-gray-800 border-b border-solid border-transparent h hover:text-gray-900"
                >
                  {navitem.name}
                </Link>
              </li>
            ))}
          </div>

          <div className="px-2 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6 text-gray-800">Sitemap</h5>
            {sitemaps.map((sitemap) => (
              <li key={sitemap.name} className="list-none footer-links mb-6">
                <Link
                  href="#"
                  className=" text-gray-800 border-b border-solid border-transparent h hover:text-gray-900"
                >
                  {sitemap.name}
                </Link>
              </li>
            ))}
          </div>
          {addresses.map((address) => (
            <div
              key={address.country}
              className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0"
            >
              <h5 className="text-xl font-bold mb-6 text-gray-800  ">
                {address.country}
              </h5>
              <address className=" text-gray-800 ">
                {address.address}
                <div>
                  <Link href="#">{address.phoneNumber}</Link>
                  <div>
                    <Link href="#">{address.email}</Link>
                  </div>
                </div>
              </address>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-base text-white leading-5">
              Designed and Developed By: Abdullah Clement Abdul Shekur
            </p>
          </div>
          <p className="mt-8 text-base leading-5 text-gray-800 md:order-1 md:mt-0">
            &copy; {year} Nenser Petroleum, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
