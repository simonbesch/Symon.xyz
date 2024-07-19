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
        <>
          <h1> {parkour.poste} </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="date">date :</label>
              <input
                type="text"
                id="date"
                name="date"
                defaultValue={parkour.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lieu">lieu :</label>
              <input
                type="text"
                id="lieu"
                name="lieu"
                defaultValue={parkour.lieu}
              />
            </div>
            <div className="form-group">
              <label htmlFor="poste">poste :</label>
              <input
                type="text"
                id="poste"
                name="poste"
                defaultValue={parkour.poste}
              />
            </div>
            <div className="form-group">
              <label htmlFor="structure">structure :</label>
              <input
                type="text"
                id="structure"
                name="structure"
                defaultValue={parkour.structure}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">type :</label>
              <input
                type="text"
                id="type"
                name="type"
                defaultValue={parkour.type}
              />
            </div>
            <div className="form-group">
              <label htmlFor="actuel">actuel :</label>
              <input
                type="text"
                id="actuel"
                name="actuel"
                defaultValue={parkour.actuel}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description :</label>
              <input
                type="text"
                id="description"
                name="description"
                defaultValue={parkour.description}
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

export default AdminParkourEdit;
