import React from "react";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";

//drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const menu = [
  { title: "Adventures", path: "/adventure" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contactUs" },
  { title: "Support", path: "/" },
];

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

function MobileNavbar({ isOpen, toggleDrawer }: DrawerProps) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="drawer"
    >
      <div className="drawer_header p-5">
        <div className="flex justify-end">
          <AiOutlineCloseCircle
            size={20}
            onClick={toggleDrawer}
            color="#000000"
          />
        </div>
        <ul className="flex flex-col gap-5 text-sm">
          {menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Drawer>
  );
}

export default MobileNavbar;
