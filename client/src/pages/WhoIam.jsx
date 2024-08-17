import "../styles/WhoIam.scss";
import { useLoaderData } from "react-router-dom";

function WhoIam() {
  const infos = useLoaderData();
  return <div>{infos.about}</div>;
}

export default WhoIam;
