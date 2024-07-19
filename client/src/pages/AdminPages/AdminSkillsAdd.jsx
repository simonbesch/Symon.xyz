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
        <>
          <h1> Ajouter un skills : </h1>
          <Form method="post" className="formGlobal">
            <div className="form-group">
              <label htmlFor="name">Nom :</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="level">level :</label>
              <input type="text" id="level" name="level" />
              <label htmlFor="levelCSS">levelCSS :</label>
              <input type="text" id="levelCSS" name="levelCSS" />
              <label htmlFor="description">description :</label>
              <input type="text" id="description" name="description" />
              <label htmlFor="category">category :</label>
              <input type="text" id="category" name="category" />
              <label htmlFor="icon">icon :</label>
              <input type="text" id="icon" name="icon" />
            </div>
            <button type="submit">Ajouter</button>
          </Form>
        </>
      )}
    </>
  );
}

export default AdminSkillsAdd;
