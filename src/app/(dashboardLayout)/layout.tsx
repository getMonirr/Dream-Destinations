"use client";

import { generateMenuItems } from "@/utils/generateSidebarMenu";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const role = "user";

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
              defaultSelectedKeys={["/profile"]}
              items={generateMenuItems(role)}
              onSelect={({ item, key }) =>
                router.push(`/dashboard/${role}/${key}`)
              }
            />
          </div>
          <div>
            <h1 className="text-drd-light-yellow">Footer</h1>
          </div>
        </div>
      </Sider>
      <Layout className="lg:ml-[200px]">
        <Header className="sticky top-0 ">
          <h1 className="text-red-500">Header</h1>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              height: "calc(300vh - 155px)",
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
