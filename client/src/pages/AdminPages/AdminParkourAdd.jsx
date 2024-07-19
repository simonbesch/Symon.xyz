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
        <>
          <h1> POST Parkour </h1>
          <Form method="post">
            <div className="form-group">
              <label htmlFor="date">date :</label>
              <input type="text" id="date" name="date" />
              <label htmlFor="lieu">lieu :</label>
              <input type="text" id="lieu" name="lieu" />
              <label htmlFor="poste">poste :</label>
              <input type="text" id="poste" name="poste" />
              <label htmlFor="structure">structure :</label>
              <input type="text" id="structure" name="structure" />
              <label htmlFor="type">type :</label>
              <input type="text" id="type" name="type" />
              <label htmlFor="actuel">actuel :</label>
              <input type="text" id="actuel" name="actuel" />
              <label htmlFor="description">description :</label>
              <input type="text" id="description" name="description" />
            </div>
            <button type="submit">Modifier</button>
          </Form>
        </>
      )}
      ;
    </>
  );
}

export default AdminParkourAdd;
