import { useRouteError, Link, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  console.log(error.message);

  return (
    <div id="error-page">
      {error.message == "Request failed with status code 422"
        ? "Le mail du compte est erroné"
        : "Probleme avec le mot de passe ?"}
      <br />
      <button onClick={goBack}>Réessayer</button>
    </div>
  );
}

export default Error;

/*

Unprocessable Entity --> pas le bon mail
 Request failed with status code 422

440 --> pas le bon mdp
 Request failed with status code 440


*/
