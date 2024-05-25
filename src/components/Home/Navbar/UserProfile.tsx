"use client";

import { logout, selectUser } from "@/lib/redux/Feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { IUser } from "@/types";
import { removeTokenFromCookie } from "@/utils/helper";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import Link from "next/link";

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const user: IUser | null | undefined = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    removeTokenFromCookie("authToken");
  };

  const profileContent = (
    <div className="flex items-center justify-center gap-4 flex-col">
      <Link href="/dashboard">
        <Button type="primary" icon={<UserOutlined />}>
          Profile
        </Button>
      </Link>
      <Button onClick={handleLogout} type="primary" icon={<LogoutOutlined />}>
        Logout
      </Button>
    </div>
  );

  return (
    <div className="flex items-center gap-4 text-end">
      <div>
        {user && (
          <>
            <h4 className=" font-bold">{user?.name}</h4>
            <p className="text-xs">admin</p>
          </>
        )}
      </div>
      <Popover content={profileContent} trigger="click">
        <Avatar
          src={url}
          style={{
            cursor: "pointer",
            border: "1px solid #fff",
            padding: "4px",
            backgroundColor: "#fff",
          }}
          size={40}
        />
      </Popover>
    </div>
  );
};

export default UserProfile;
