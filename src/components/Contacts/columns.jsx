import { Button } from "antd";

export const getColumns = ({ handleDelete, handleEdit }) => [
  { dataIndex: "name", title: "Name" },
  { dataIndex: "lastName", title: "Address" },
  { dataIndex: "city", title: "City" },
  { dataIndex: "country", title: "Country" },
  { dataIndex: "email", title: "Email", render: (email) => email.join(", ") },
  {
    dataIndex: "number",
    title: "Number",
    render: (number) => number.join(", "),
  },
  {
    dataIndex: "id",
    title: "Edit",
    render: (id) => (
      <Button type="primary" onClick={() => handleEdit(id)}>
        Edit
      </Button>
    ),
  },
  {
    dataIndex: "id",
    title: "Delete",
    render: (id) => (
      <Button danger type="primary" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    ),
  },
];
