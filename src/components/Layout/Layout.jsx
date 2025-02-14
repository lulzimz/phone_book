import { Layout as AntdLayout } from "antd";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <AntdLayout>
      <AntdLayout.Header>
        <Link style={{ color: "white" }} to="/">
          PhoneBook
        </Link>
      </AntdLayout.Header>

      <AntdLayout.Content style={{ padding: "20px", overflow: "auto" }}>
        <Outlet />
      </AntdLayout.Content>
    </AntdLayout>
  );
};

export default Layout;
