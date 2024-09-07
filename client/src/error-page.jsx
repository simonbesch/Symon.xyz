import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Tu m'as l'air perdu ?</h1>
      <img
        src="https://veraicona.hypotheses.org/files/2017/11/confused-travolta-original-pulp-fiction-animated-gif.gif"
        alt="Lost"
      />
    </div>
  );
}

export default ErrorPage;
