import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "src/pages/SignIn/reducer";
import signUpReducer from "src/pages/SignUp/reducer";
const store = configureStore({
  reducer: {
    signIn: signInReducer,
    signUp: signUpReducer,
  },
});

export { store };
