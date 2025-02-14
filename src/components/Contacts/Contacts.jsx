import { useNavigate } from "react-router-dom";
import { Button, Flex, Table } from "antd";
import { contactsStore } from "../../store";
import { getColumns } from "./columns";

const Contacts = () => {
  const navigate = useNavigate();

  const { contacts, setContacts } = contactsStore();

  const handleEdit = (id) => {
    navigate(`/edit-contact/${id}`);
  };
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Flex vertical gap={20}>
      <Flex style={{ width: "100%" }} justify="space-between">
        Contacts
        <Button onClick={() => navigate("/add-contact")}>Add Contact</Button>
      </Flex>

      <Table
        size="middle"
        pageSize={5}
        dataSource={contacts.map((item, i) => ({ ...item, key: i }))}
        columns={getColumns({ handleEdit, handleDelete })}
      />
    </Flex>
  );
};

export default Contacts;
