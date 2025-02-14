import { Route, Routes as RoutesReactRouterDom } from "react-router-dom";
import { ContactForm, Contacts, Layout } from "./components";

const Routes = () => {
  return (
    <RoutesReactRouterDom>
      <Route element={<Layout />}>
        <Route path="/" element={<Contacts />} />
        <Route path="/add-contact" element={<ContactForm />} />
        <Route path="/edit-contact/:id" element={<ContactForm />} />
      </Route>
    </RoutesReactRouterDom>
  );
};

export default Routes;
