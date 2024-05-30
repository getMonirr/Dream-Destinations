"use client";

import { selectUser } from "@/lib/redux/Feature/auth/authSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DreamLogo from "./DreamLogo";
import UserProfile from "./UserProfile";

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

const AppNavbar = ({ isVertical }: { isVertical?: boolean }) => {
  const pathname = usePathname();

  const user = useAppSelector(selectUser);

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
      <DreamLogo />
      <ul className="flex items-center justify-center gap-4">
        {menuItems.map((item) => (
          <Link href={item.link} key={item.key}>
            <li
              className={`${
                isActive(item.link)
                  ? "text-drdPrimary font-bold"
                  : "text-drd-green"
              } cursor-pointer hover:text-drdPrimary`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-4">
        {user ? (
          <>
            <UserProfile />
          </>
        ) : (
          <div>
            <Link href="/auth/login">
              <Button type="primary" icon={<UserOutlined />}>
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button icon={<EditOutlined />}>Register</Button>
            </Link>
          </div>
        )}
      </div>
    </Flex>
  );
};

export default AppNavbar;
