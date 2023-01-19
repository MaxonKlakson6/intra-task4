import { api } from "src/api/apiConfig";
import type { FormValues } from "src/pages/SignIn/types";

export const signIn = (userData: FormValues) => {
  return api.post("auth/signIn", userData);
};
