import { useRouteError, Link } from "react-router-dom";

function LoginError() {
  const error = useRouteError();

  return (
    <div id="error-page">
      {error.message == "Request failed with status code 440"
        ? "mauvais mdp"
        : "erreur"}
      <Link to="/login">retourner</Link>
    </div>
  );
}

export default LoginError;
