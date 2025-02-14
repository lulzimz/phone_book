import { useNavigate, useParams } from "react-router-dom";
import { Button, Flex, Form, Input } from "antd";
import { inputs } from "./inputs";
import { MultipleInputs } from "../commonComponents";
import { contactsStore } from "../../store";

const ContactForm = () => {
  const [form] = Form.useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  const { contacts, setContacts } = contactsStore();

  const handleAddNewContact = () => {
    setContacts([...contacts, { id: Date.now(), ...form.getFieldValue() }]);
    form.resetFields();
  };

  const handleEditContact = () => {
    setContacts(
      contacts.map((item) =>
        item.id === id ? { ...item, ...form.getFieldValue() } : item
      )
    );
    navigate("/");
  };

  return (
    <Flex vertical style={{ overflow: "auto" }}>
      <h1>Register new contact</h1>

      <Form
        form={form}
        layout="vertical"
        initialValues={contacts.find((item) => item.id === id)}
      >
        {inputs.map(({ name, label, hasMultiple, ...props }, i) => {
          const InputComponent = hasMultiple ? MultipleInputs : Input;

          return (
            <Form.Item
              key={i}
              name={name}
              layout="vertical"
              label={<b>{label}:</b>}
            >
              <InputComponent allowClear size="large" {...props} />
            </Form.Item>
          );
        })}
      </Form>

      <Button
        type="primary"
        style={{ width: "fit-content" }}
        onClick={id ? handleEditContact : handleAddNewContact}
      >
        Save
      </Button>
    </Flex>
  );
};

export default ContactForm;
