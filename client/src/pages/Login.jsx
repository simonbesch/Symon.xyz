import { Form } from "react-router-dom";

function Login() {
  return (
    <Form method="post">
      <div className="form-group">
        <label htmlFor="email">mail :</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">password :</label>
        <input type="text" id="password" name="password" />
      </div>
      <button type="submit">connection</button>
    </Form>
  );
}

export default Login;
