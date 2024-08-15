import { useAdmin } from "../../contexts/AdminContext";
import { Form } from "react-router-dom";
import Nop from "../../components/Nop";

function AdminParkourAdd() {
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> Ajouter un parcours : </h1>
          <Form method="post" className="formGlobal">
            <div className="form-group">
              <label htmlFor="date">Date :</label>
              <input type="text" id="date" name="date" />

              <label htmlFor="lieu">Lieu :</label>
              <input type="text" id="lieu" name="lieu" />

              <label htmlFor="poste">Poste :</label>
              <input type="text" id="poste" name="poste" />

              <label htmlFor="structure">Structure :</label>
              <input type="text" id="structure" name="structure" />

              <label htmlFor="type">Type :</label>
              <input type="text" id="type" name="type" />

              <label htmlFor="actuel">Actuel :</label>
              <select id="actuel" name="actuel">
                <option value="0">Non</option>
                <option value="1">Oui</option>
              </select>

              <label htmlFor="description">description :</label>
              <input type="text" id="description" name="description" />
            </div>
            <button type="submit">Ajouter</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default AdminParkourAdd;
