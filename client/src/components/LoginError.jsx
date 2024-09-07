import { useRouteError, Link } from "react-router-dom";

function LoginError() {
  const error = useRouteError();

  return (
    <div id="error-page">
      {error.message == "Request failed with status code 440"
        ? "mauvaises infos"
        : "mauvaises infos"}
      <br />
      <Link to="/login"> - Réessayer - </Link>
    </div>
  );
}

export default LoginError;
