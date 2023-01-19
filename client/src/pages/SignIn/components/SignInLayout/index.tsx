import { ROUTE_NAMES } from "src/router/routeNames";
import { Link } from "react-router-dom";
const SignInLayout = () => {
  return (
    <div>
      Sign in
      <Link to={ROUTE_NAMES.SIGN_UP}>Sign up</Link>
    </div>
  );
};

export default SignInLayout;
