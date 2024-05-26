"use client";

import { selectUser } from "@/lib/redux/Feature/auth/authSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import { generateMenuItems } from "@/utils/generateSidebarMenu";
import { Layout, Menu, theme } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const user = useAppSelector(selectUser);
  const pathname = usePathname();

  // console.log({ user, pathname });

  const role = user?.role?.toLowerCase();

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
              <h1 className="text-drd-light-yellow text-center py-8">logo</h1>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname.split("/")[1]]}
              items={generateMenuItems(role)}
              onSelect={({ item, key }) => {
                if (key === "/profile" || key === "/change-password") {
                  router.push(`/dashboard/${key}`);
                } else {
                  router.push(`/dashboard/${role}/${key}`);
                }
              }}
            />
          </div>
          <div>
            <h1 className="text-drd-light-yellow">Footer</h1>
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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
