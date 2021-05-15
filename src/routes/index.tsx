import * as React from "react";
import { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import config from "./../config";
import MainRoutes from "./MainRoutes";
import LoginRoutes from "./LoginRoutes";
import Loader from "../ui-component/extended/Loader/Loader";
import AuthenticationRoutes from "./AuthenticationRoutes";
const Routes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Redirect exact from="/" to={config.defaultPath} />
          <>
            <AuthenticationRoutes />

            <LoginRoutes />

            <MainRoutes />
          </>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};
export default Routes;
