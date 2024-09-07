import "../styles/About.scss";
import { useLoaderData } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

function About() {
  const infos = useLoaderData();
  return (
    <div>
      {" "}
      <TextareaAutosize
        defaultValue={infos.about}
        readonly="readonly"
        className="textAreaComponant"
      />
    </div>
  );
}

export default About;
