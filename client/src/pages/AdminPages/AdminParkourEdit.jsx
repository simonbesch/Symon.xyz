import { Form, useLoaderData } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";

function AdminParkourEdit() {
  const parkour = useLoaderData();
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> {parkour.poste} </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="date">Date :</label>
              <input
                type="text"
                id="date"
                name="date"
                defaultValue={parkour.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lieu">Lieu :</label>
              <input
                type="text"
                id="lieu"
                name="lieu"
                defaultValue={parkour.lieu}
              />
            </div>
            <div className="form-group">
              <label htmlFor="poste">Poste :</label>
              <input
                type="text"
                id="poste"
                name="poste"
                defaultValue={parkour.poste}
              />
            </div>
            <div className="form-group">
              <label htmlFor="structure">Structure :</label>
              <input
                type="text"
                id="structure"
                name="structure"
                defaultValue={parkour.structure}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type :</label>
              <input
                type="text"
                id="type"
                name="type"
                defaultValue={parkour.type}
              />
            </div>
            <div className="form-group">
              <label htmlFor="actuel">Actuel :</label>
              <select id="actuel" name="actuel" defaultValue={parkour.actuel}>
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description :</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={parkour.description}
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

export default AdminParkourEdit;
