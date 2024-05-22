"use client";

import RootContainer from "@/components/shared/RootContainer";
import {
  EditOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer, Flex, Popover } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    label: "Home",
    key: "home",
    link: "/",
  },
  {
    label: "About Us",
    key: "about",
    link: "/about",
  },
];

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const profileContent = (
  <div className="flex items-center justify-center gap-4 flex-col">
    <Button type="primary" icon={<UserOutlined />}>
      Profile
    </Button>
    <Button type="primary" icon={<LogoutOutlined />}>
      Logout
    </Button>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-drdBg h-[80px] flex items-center justify-center px-4">
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
          <Popover content={profileContent} trigger="click">
            <Avatar src={url} style={{ cursor: "pointer" }} />
          </Popover>
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

const AppNavbar = ({ isVertical }: { isVertical?: boolean }) => {
  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname === link;
  };

  return (
    <Flex
      gap="middle"
      justify="space-between"
      align="center"
      vertical={isVertical}
      className="h-[80px]"
    >
      <div>
        <h1>Logo</h1>
      </div>
      <ul className="flex items-center justify-center gap-4">
        {menuItems.map((item) => (
          <Link href={item.link} key={item.key}>
            <p
              className={`${
                isActive(item.link) ? "text-drdPrimary" : "text-white"
              } cursor-pointer hover:text-drdPrimary`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-4">
        <Popover content={profileContent} trigger="click">
          <Avatar src={url} style={{ cursor: "pointer" }} />
        </Popover>
        <Button type="primary" icon={<UserOutlined />}>
          Login
        </Button>
        <Button icon={<EditOutlined />}>Register</Button>
      </div>
    </Flex>
  );
};

export default Navbar;
