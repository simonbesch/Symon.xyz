import { Form, useLoaderData } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";

function AdminSkillsEdit() {
  const skills = useLoaderData();
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <>
          <h1> {skills.name} </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={skills.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="level">level :</label>
              <input
                type="text"
                id="level"
                name="level"
                defaultValue={skills.level}
              />
            </div>
            <div className="form-group">
              <label htmlFor="levelCSS">levelCSS :</label>
              <input
                type="text"
                id="levelCSS"
                name="levelCSS"
                defaultValue={skills.levelCSS}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description :</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={skills.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">category :</label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={skills.category}
              />
            </div>
            <div className="form-group">
              <label htmlFor="icon">icon :</label>
              <input
                type="text"
                id="icon"
                name="icon"
                defaultValue={skills.icon}
              />
            </div>
            <button type="submit">Modifier</button>
          </Form>
          <Form method="delete">
            <button type="submit">Supprimer</button>
          </Form>
        </>
      )}
    </>
  );
}

export default AdminSkillsEdit;
