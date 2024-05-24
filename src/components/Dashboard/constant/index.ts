import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineModeOfTravel, MdTravelExplore } from "react-icons/md";

export const adminMenuItems = [
  {
    key: "/user-management",
    icon: React.createElement(FaUsers),
    label: "User Management",
    href: "/user-management",
  },
  {
    key: "/trip-management",
    icon: React.createElement(MdTravelExplore),
    label: "Trip Management",
    href: "/trip-management",
  },
];

export const userMenuItems = [
  {
    key: "/travel-request-history",
    icon: React.createElement(MdOutlineModeOfTravel),
    label: "Request History",
    href: "/travel-request-history",
  },
  {
    key: "/travel-posts",
    icon: React.createElement(BsFillSignpostSplitFill),
    label: "Travel Posts",
    href: "/travel-posts",
  },
];

export const commonMenuItems = [
  {
    key: "/profile",
    icon: React.createElement(UserOutlined),
    label: "Profile",
    href: "/profile",
  },
];
