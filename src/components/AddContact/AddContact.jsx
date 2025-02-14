import { Flex } from "antd";
import { contactsStore } from "../../store";

const AddContact = () => {
  const { contacts, setContacts } = contactsStore();

  return <Flex></Flex>;
};

export default AddContact;
