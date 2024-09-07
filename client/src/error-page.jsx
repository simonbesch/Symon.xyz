import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Tu m'a l'air perdu ?</h1>
    </div>
  );
}

export default ErrorPage;
