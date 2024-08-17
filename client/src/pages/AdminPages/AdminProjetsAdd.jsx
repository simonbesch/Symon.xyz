import { useAdmin } from "../../contexts/AdminContext";
import { Form } from "react-router-dom";
import Nop from "../../components/Nop";

function AdminProjetsAdd() {
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> Ajouter un projet : </h1>
          <Form method="post" className="formGlobal">
            <div className="form-group">
              <label htmlFor="title">Titre :</label>
              <input type="text" id="title" name="title" />

              <label htmlFor="description1">Description1 :</label>
              <textarea type="text" id="description1" name="description1" />

              <label htmlFor="description2">Description2 :</label>
              <textarea type="text" id="description2" name="description2" />

              <label htmlFor="description3">Description3 :</label>
              <textarea type="text" id="description3" name="description3" />

              <label htmlFor="mates">Mates :</label>
              <input type="text" id="mates" name="mates" />

              <label htmlFor="github">Github :</label>
              <input type="text" id="github" name="github" />

              <label htmlFor="online">Online :</label>
              <input type="text" id="online" name="online" />

              <label htmlFor="lien">Lien :</label>
              <input type="text" id="lien" name="lien" />

              <label htmlFor="category">Category :</label>
              <select id="category" name="category">
                <option value="projets">Projets</option>
                <option value="checkPoints">CheckPoints</option>
                <option value="ateliersQuestes">Ateliers et Quêtes</option>
                <option value="projetsPerso">Projets Perso</option>
                <option value="sitesPerso">Sites Perso</option>
              </select>

              <label htmlFor="img1">img1 :</label>
              <input type="text" id="img1" name="img1" />

              <label htmlFor="img2">img2 :</label>
              <input type="text" id="img2" name="img2" />

              <label htmlFor="img3">img3 :</label>
              <input type="text" id="img3" name="img3" />

              <label htmlFor="img4">img4 :</label>
              <input type="text" id="img4" name="img4" />

              <label htmlFor="img5">img5 :</label>
              <input type="text" id="img5" name="img5" />

              <label htmlFor="img6">img6 :</label>
              <input type="text" id="img6" name="img6" />

              <label htmlFor="img7">img7 :</label>
              <input type="text" id="img7" name="img7" />

              <label htmlFor="img8 ">img8 :</label>
              <input type="text" id="img8" name="img8" />

              <label htmlFor="img9">img9 :</label>
              <input type="text" id="img9" name="img9" />

              <label htmlFor="img10">img10 :</label>
              <input type="text" id="img10" name="img10" />
            </div>
            <button type="submit">Ajouter</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default AdminProjetsAdd;
