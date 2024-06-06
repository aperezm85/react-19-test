import { use } from "react";

import { UserContext } from "../context/user";

export function UseContextExample({ enabled = false }) {
  if (!enabled) return null;

  const { name, isLogged, updateUser } = use(UserContext);
  return (
    <div>
      {isLogged ? (
        <>
          <p>Hello , {name}</p>
          <button onClick={() => updateUser({ name: null, isLogged: false })}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Welcome</p>
          <button onClick={() => updateUser({ name: "Alex", isLogged: true })}>
            Sign in
          </button>
        </>
      )}
    </div>
  );
}
