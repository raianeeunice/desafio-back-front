import React, { useState } from "react";

const NavItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-neutral-500"
      aria-current="page"
    >
      {name}
    </a>
  );
};

const NavItemMobile = ({ link, name }) => {
  return (
    <a
      href={link}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {name}
    </a>
  );
};

const navItens = [
  { name: "Home", link: "/app/home" },
  { name: "Random Dog", link: "/app/dog" },
  { name: "Http Cat", link: "/app/cat" },
  { name: "CRUD Clients", link: "/app/users" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-neutral-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItens.map((item) => (
                  <NavItem {...item} key={item.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navItens.map((item) => (
              <NavItemMobile {...item} key={item.name} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
