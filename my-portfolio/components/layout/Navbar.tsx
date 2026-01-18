"use client";

import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Skills", href: "/skills", current: false },
  { name: "Qualifications", href: "/qualification", current: false },
  { name: "Services", href: "/service", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="relative bg-bottle-green-dark">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo + Desktop nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                width={32}
                height={32}
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white rounded-md px-3 py-2 text-sm font-medium"                    
                    // className={classNames(
                    //   item.current
                    //     ? "bg-gray-900 text-white"
                    //     : "text-gray-300 hover:bg-white/5 hover:text-white",
                    //   "rounded-md px-3 py-2 text-sm font-medium",
                    // )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              style={{ color: "#FFFFFF" }}
            />

            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#FFFFFF" }}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#FFFFFF" }}
            />

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 data-closed:scale-95 data-closed:opacity-0"
              >
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100">
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-white rounded-md px-3 py-2 text-sm font-medium"
              // aria-current={item.current ? "page" : undefined}
              // className={classNames(
              //   item.current
              //     ? "bg-gray-900 text-white"
              //     : "text-gray-300 hover:bg-white/5 hover:text-white",
              //   "block rounded-md px-3 py-2 text-base font-medium",
              // )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
