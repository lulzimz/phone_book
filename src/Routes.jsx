import { Route, Routes as RoutesReactRouterDom } from "react-router-dom";
import { AddContact, Contacts, Layout } from "./components";

const Routes = () => {
  console.log("Routes");

  return (
    <RoutesReactRouterDom>
      <Route element={<Layout />}>
        <Route path="/" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Route>
    </RoutesReactRouterDom>
  );
};

export default Routes;
