import { Form } from "react-router-dom";

function Login() {
  return (
    <Form method="post">
      <div className="form-group">
        <label htmlFor="email">mail :</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="password">password :</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">connection</button>
    </Form>
  );
}

export default Login;
