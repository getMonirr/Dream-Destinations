"use client";

import { logout, selectUser } from "@/lib/redux/Feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { generateMenuItems } from "@/utils/generateSidebarMenu";
import { removeTokenFromCookie } from "@/utils/helper";
import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // ant theme
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // next
  const router = useRouter();
  const pathname = usePathname();

  // redux
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  // console.log({ user, pathname });

  const role = user?.role?.toLowerCase();

  /// Handle Logout
  const handleLogout = () => {
    removeTokenFromCookie("authToken");
    dispatch(logout());
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          height: "100vh",
          position: "fixed",
        }}
      >
        <div className="flex justify-between items-center flex-col h-screen">
          <div className="w-full ">
            <div className="demo-logo-vertical">
              <h1 className="text-drd-light-yellow text-center py-8">
                <Link href="/">Logo</Link>
              </h1>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname.split("/")[1]]}
              items={generateMenuItems(role)}
              onSelect={({ item, key }) => {
                if (
                  key === "/profile" ||
                  key === "/change-password" ||
                  key === "/"
                ) {
                  router.push(`/dashboard/${key}`);
                } else {
                  router.push(`/dashboard/${role}/${key}`);
                }
              }}
              onClick={({ key }) => {
                if (
                  key === "/profile" ||
                  key === "/change-password" ||
                  key === "/"
                ) {
                  router.push(`/dashboard/${key}`);
                } else {
                  router.push(`/dashboard/${role}/${key}`);
                }
              }}
            />
          </div>
          <div className="w-full mb-5 px-4">
            <Button
              type="primary"
              onClick={handleLogout}
              size="large"
              block
              icon={<LogoutOutlined />}
              iconPosition="end"
            >
              Logout
            </Button>
          </div>
        </div>
      </Sider>
      <Layout className="lg:ml-[200px]">
        <Header className="">
          <h1 className="text-red-500">Header</h1>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "calc(100vh - 155px)",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Dream Destinations ©{new Date().getFullYear()} Created by Dream Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
