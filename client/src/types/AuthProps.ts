import type { ChangeEvent, FormEvent } from "react";
import type { StringAuthError } from "src/types/AuthError";

export interface AuthProps<FormValues> {
  form: FormValues;
  error: StringAuthError;
  isLoading: boolean;
  handleChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}
