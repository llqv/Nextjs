import { useState } from "react";
import { registerUser } from "../../service/users";
export interface users{
     username : string,
     password: string
}
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event :any) => {
    event.preventDefault();

    try {
      const user = { username, password };
      const response = await registerUser(user);
      console.log(response);
    } catch (error : any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
