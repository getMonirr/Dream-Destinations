import {
  adminMenuItems,
  commonMenuItems,
  userMenuItems,
} from "@/components/Dashboard/constant";

/// generate menu items by user role
export const generateMenuItems = (role: string) => {
  if (role === "admin") {
    return [...commonMenuItems, ...adminMenuItems];
  }
  return [...commonMenuItems, ...userMenuItems];
};
