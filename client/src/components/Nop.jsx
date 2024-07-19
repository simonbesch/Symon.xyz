import { Link } from "react-router-dom";

function Nop() {
  return (
    <div>
      <h1>Vous n'avez pas les droits</h1>
      <Link to="/" className="linkDesktop">
        Retourner sur Home
      </Link>
    </div>
  );
}

export default Nop;
