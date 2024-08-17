import "../styles/About.scss";
import { useLoaderData } from "react-router-dom";

function About() {
  const infos = useLoaderData();
  return <div>{infos.about}</div>;
}

export default About;
