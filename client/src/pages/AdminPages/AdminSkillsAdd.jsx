import { useAdmin } from "../../contexts/AdminContext";
import { Form } from "react-router-dom";
import Nop from "../../components/Nop";

function AdminSkillsAdd() {
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> Ajouter un skills : </h1>
          <Form method="post" className="formGlobal">
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="level">Level :</label>
              <select id="level" name="level">
                <option value="Maitrise">Maitrise</option>
                <option value="En Cour">En Cour</option>
                <option value="Debut d'aprentissage">
                  Debut d'aprentissage
                </option>
                <option value="Passion">Passion</option>
              </select>
              <label htmlFor="levelCSS">LevelCSS :</label>
              <select id="levelCSS" name="levelCSS">
                <option value="vert">Vert</option>
                <option value="orange">Orange</option>
                <option value="rouge">Rouge</option>
                <option value="doree">Doree</option>
              </select>
              <label htmlFor="description">Description :</label>
              <input type="text" id="description" name="description" />
              <label htmlFor="category">Category :</label>
              <select id="category" name="category">
                <option value="Technos">Technos</option>
                <option value="AutresTechnos">AutresTechnos</option>
                <option value="Logiciels">Logiciels</option>
                <option value="Langues">Langues</option>
                <option value="InteretPerso">InteretPerso</option>
              </select>
              <label htmlFor="icon">Icon :</label>
              <input type="text" id="icon" name="icon" />
            </div>
            <button type="submit">Ajouter</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default AdminSkillsAdd;
