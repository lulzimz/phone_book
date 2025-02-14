import { Flex, Layout as AntdLayout } from "antd";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <AntdLayout>
      <AntdLayout.Sider>
        <Flex className="sider">
          <Link to="/">PhoneBook</Link>
        </Flex>
      </AntdLayout.Sider>

      <AntdLayout>
        <Flex className="header">
          <Flex>PhoneBook</Flex>
          <Flex align="center" gap={20}></Flex>
        </Flex>

        <AntdLayout.Content style={{ padding: "20px" }}>
          <Outlet />
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
