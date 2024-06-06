import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";

import { updateName } from "../utils";

export function Actions() {
  const [result, setResult] = useState(null);

  const updateNameAction = async (previousState, formData) => {
    const name = formData.get("username");
    const error = await updateName(name);
    if (error) return error;
    setResult(name);
    return null;
  };

  // The error field is an state. is What the API call will return. In this scenario we return a string that contains the error message, for that I called it error
  const [error, submitAction, isPending] = useActionState(updateNameAction);

  return (
    <form action={submitAction}>
      <input name="username" disabled={isPending} placeholder="Alex Perez" />

      <Button />
      {error && <p>{error}</p>}
      {result && !error && <p>The stored name is : {result}</p>}
    </form>
  );
}

function Button() {
  const { pending, data, method, action } = useFormStatus();
  console.log({
    pending,
    data,
    method,
    action,
  });

  return (
    <button disabled={pending}>{pending ? "Loading..." : "Update"}</button>
  );
}
