"use client";

import { Heart, House, ShoppingCart, Store, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const user = "Prashant";
  const router = useRouter();
  const navItems = [
    { label: "Home", url: "/home", icon: <House /> },
    { label: "Store", url: "/store", icon: <Store /> },
  ];

  const userNavItems = [
    { label: "Favourites", url: "/favourites", icon: <Heart /> },
    { label: "Cart", url: "/cart", icon: <ShoppingCart /> },
    { label: "Profile", url: "/auth/authentication", icon: <User /> },
  ];

  const handleItemClick = (type: string, item: object) => {
    if (type === "navItems") {
      router.push(item.url);
    } else {
      router.push(item.url);
    }
  };
  return (
    <div className="w-full h-[100px]  px-3 border-b-[2px]">
      <div className="w-full h-full flex justify-end items-center gap-5">
        <div className="flex justify-center items-center gap-5">
          {navItems?.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleItemClick("navItems", item)}
              key={index}
            >
              <span>{item.icon}</span>
              <span key={index} className=" font-semibold text-lg">
                {item?.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-5">
          {userNavItems?.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={() => handleItemClick("usernavItems", item)}
              key={index}
            >
              <span>{item.icon}</span>
              <span key={index} className=" font-semibold text-lg">
                {item?.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
