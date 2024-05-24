"use client";

import RootContainer from "@/components/shared/RootContainer";
import { selectUser } from "@/lib/redux/Feature/auth/authSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import AppNavbar from "./AppNavBar";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const user = useAppSelector(selectUser);

  const [open, setOpen] = useState(false);
  return (
    <div className="bg-drd-light-green h-[80px] flex items-center justify-center px-4">
      <RootContainer>
        <div className="hidden md:block">
          <AppNavbar />
        </div>
        <div className="md:hidden flex items-center justify-between">
          <Button
            onClick={() => setOpen(true)}
            size="large"
            icon={<MenuOutlined />}
          />
          <div>
            <h1>Dream Destinations</h1>
          </div>
          {user && <UserProfile />}
        </div>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          style={{ backgroundColor: "primary" }}
          closable
          placement="left"
        >
          <AppNavbar isVertical />
        </Drawer>
      </RootContainer>
    </div>
  );
};

export default Navbar;
