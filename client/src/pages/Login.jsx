import { Form, useRouteError } from "react-router-dom";
import "../styles/Login.scss";

function Login() {
  const error = useRouteError();

  return (
    <div className="LoginGlobal">
      <Form method="post" className="login">
        <label htmlFor="email">Mail :</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Connection</button>
      </Form>
    </div>
  );
}

export default Login;
