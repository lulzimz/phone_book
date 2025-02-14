import { Button, Flex, Table } from "antd";
import { contactsStore } from "../../store";
import { getColumns } from "./columns";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  const { contacts } = contactsStore();

  console.log({ contacts });

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
        columns={getColumns()}
      />
    </Flex>
  );
};

export default Contacts;
