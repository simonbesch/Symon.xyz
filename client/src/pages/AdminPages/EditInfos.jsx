import { Form, useLoaderData } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";

function EditInfo() {
  const infos = useLoaderData();
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> {infos.name} </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="dispo">Disponible :</label>
              <select id="dispo" name="dispo" defaultValue={infos.dispo}>
                <option value="Disponible">Disponible</option>
                <option value="Indisponible">Indisponible</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mail">Mail :</label>
              <input
                type="text"
                id="mail"
                name="mail"
                defaultValue={infos.mail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mlnkail">LinkDn :</label>
              <input type="text" id="lnk" name="lnk" defaultValue={infos.lnk} />
            </div>
            <div className="form-group">
              <label htmlFor="github">Github :</label>
              <input
                type="text"
                id="github"
                name="github"
                defaultValue={infos.github}
              />
            </div>
            <div className="form-group">
              <label htmlFor="insta">Insta :</label>
              <input
                type="text"
                id="insta"
                name="insta"
                defaultValue={infos.insta}
              />
            </div>
            <div className="form-group">
              <label htmlFor="icon">About :</label>
              <textarea
                type="text"
                id="about"
                name="about"
                defaultValue={infos.about}
              />
            </div>
            <div className="form-group">
              <label htmlFor="iinfo1con">info1 :</label>
              <textarea
                type="text"
                id="info1"
                name="info1"
                defaultValue={infos.info1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="info2">info2 :</label>
              <textarea
                type="text"
                id="info2"
                name="info2"
                defaultValue={infos.info2}
              />
            </div>
            <div className="form-group">
              <label htmlFor="info3">info3 :</label>
              <textarea
                type="text"
                id="info3"
                name="info3"
                defaultValue={infos.info3}
              />
            </div>
            <div className="form-group">
              <label htmlFor="info4">info4 :</label>
              <textarea
                type="text"
                id="info4"
                name="info4"
                defaultValue={infos.info4}
              />
            </div>
            <div className="form-group">
              <label htmlFor="info5">info5 :</label>
              <textarea
                type="text"
                id="info5"
                name="info5"
                defaultValue={infos.info5}
              />
            </div>
            <button type="submit">Modifier</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditInfo;
