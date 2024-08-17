import { Form, useLoaderData } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";

function AdminProjetsEdit() {
  const projets = useLoaderData();
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> {projets.name} </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="title">Titre :</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={projets.title}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description1">Description1 :</label>
              <textarea
                type="text"
                id="description1"
                name="description1"
                defaultValue={projets.description1}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description2">Description2 :</label>
              <textarea
                type="text"
                id="description2"
                name="description2"
                defaultValue={projets.description2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description3">Description3 :</label>
              <textarea
                type="text"
                id="description3"
                name="description3"
                defaultValue={projets.description3}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mates">Mates :</label>
              <input
                type="text"
                id="mates"
                name="mates"
                defaultValue={projets.mates}
              />
            </div>

            <div className="form-group">
              <label htmlFor="github">Github :</label>
              <input
                type="text"
                id="github"
                name="github"
                defaultValue={projets.github}
              />
            </div>

            <div className="form-group">
              <label htmlFor="online">Online :</label>
              <input
                type="text"
                id="online"
                name="online"
                defaultValue={projets.online}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lien">Lien :</label>
              <input
                type="text"
                id="lien"
                name="lien"
                defaultValue={projets.lien}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category :</label>
              <select
                id="category"
                name="category"
                defaultValue={projets.category}
              >
                <option value="projets">Projets</option>
                <option value="checkPoints">CheckPoints</option>
                <option value="ateliersQuestes">Ateliers et Quêtes</option>
                <option value="projetsPerso">Projets Perso</option>
                <option value="sitesPerso">Sites Perso</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="img1">img1 :</label>
              <input
                type="text"
                id="img1"
                name="img1"
                defaultValue={projets.img1}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img2">img2 :</label>
              <input
                type="text"
                id="img2"
                name="img2"
                defaultValue={projets.img2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img3">img3 :</label>
              <input
                type="text"
                id="img3"
                name="img3"
                defaultValue={projets.img3}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img4">img4 :</label>
              <input
                type="text"
                id="img4"
                name="img4"
                defaultValue={projets.img4}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img5">img5 :</label>
              <input
                type="text"
                id="img5"
                name="img5"
                defaultValue={projets.img5}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img6">img6 :</label>
              <input
                type="text"
                id="img6"
                name="img6"
                defaultValue={projets.img6}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img7">img7 :</label>
              <input
                type="text"
                id="img7"
                name="img7"
                defaultValue={projets.img7}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img8">img8 :</label>
              <input
                type="text"
                id="img8"
                name="img8"
                defaultValue={projets.img8}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img9">img9 :</label>
              <input
                type="text"
                id="img9"
                name="img9"
                defaultValue={projets.img9}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img10">img10 :</label>
              <input
                type="text"
                id="img10"
                name="img10"
                defaultValue={projets.img10}
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

export default AdminProjetsEdit;
