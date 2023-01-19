import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "src/router/routeNames";

const SignUpContainer = () => {
  return (
    <div>
      SignUp
      <Link to={ROUTE_NAMES.SIGN_IN}>Sign in</Link>
    </div>
  );
};

export default SignUpContainer;
