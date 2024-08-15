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
        <div className="EditAddContainer">
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
              <label htmlFor="level">Level :</label>
              <select id="level" name="level" defaultValue={skills.level}>
                <option value="Maitrise">Maitrise</option>
                <option value="En Cour">En Cour</option>
                <option value="Debut d'aprentissage">
                  Debut d'aprentissage
                </option>
                <option value="Passion">Passion</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="levelCSS">LevelCSS :</label>
              <select
                id="levelCSS"
                name="levelCSS"
                defaultValue={skills.levelCSS}
              >
                <option value="vert">Vert</option>
                <option value="orange">Orange</option>
                <option value="rouge">Rouge</option>
                <option value="doree">Doree</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description :</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={skills.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category :</label>
              <select
                id="category"
                name="category"
                defaultValue={skills.category}
              >
                <option value="Technos">Technos</option>
                <option value="AutresTechnos">AutresTechnos</option>
                <option value="Logiciels">Logiciels</option>
                <option value="Langues">Langues</option>
                <option value="InteretPerso">InteretPerso</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="icon">Icon :</label>
              <input
                type="text"
                id="icon"
                name="icon"
                defaultValue={skills.icon}
              />
            </div>
            <button type="submit">Modifier</button>
          </Form>
          <Form method="delete" className="deleteBTN">
            <button type="submit">Supprimer</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default AdminSkillsEdit;
