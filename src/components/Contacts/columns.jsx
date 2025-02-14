import { Button } from "antd";

export const getColumns = () => [
  { dataIndex: "name", title: "Name" },
  { dataIndex: "lastName", title: "Address" },
  { dataIndex: "city", title: "City" },
  { dataIndex: "country", title: "Country" },
  { dataIndex: "email", title: "Email" },
  { dataIndex: "number", title: "Number" },
  {
    dataIndex: "id",
    title: "Edit",
    render: () => <Button type="primary">Edit</Button>,
  },
  {
    dataIndex: "id",
    title: "Delete",
    render: () => (
      <Button danger type="primary">
        Delete
      </Button>
    ),
  },
];
