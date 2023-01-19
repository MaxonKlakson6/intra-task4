import { Navigate, Route, Routes } from "react-router";

import SignInContainer from "src/pages/SignIn/container/SignInContainer";
import SignUpContainer from "src/pages/SignUp/container/SignUpContainer";

import { ROUTE_NAMES } from "src/router/routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path="/" element={<Navigate to={ROUTE_NAMES.SIGN_IN} replace />} />
    </Routes>
  );
};

export default Router;
