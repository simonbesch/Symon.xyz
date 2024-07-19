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
        <>
          <h1> Ajouter un projet : </h1>
          <Form method="post" className="formGlobal">
            <div className="form-group">
              <label htmlFor="title">title :</label>
              <input type="text" id="title" name="title" />

              <label htmlFor="description1">description1 :</label>
              <input type="text" id="description1" name="description1" />

              <label htmlFor="description2">description2 :</label>
              <input type="text" id="description2" name="description2" />

              <label htmlFor="description3">description3 :</label>
              <input type="text" id="description3" name="description3" />

              <label htmlFor="github">github :</label>
              <input type="text" id="github" name="github" />

              <label htmlFor="online">online :</label>
              <input type="text" id="online" name="online" />

              <label htmlFor="lien">lien :</label>
              <input type="text" id="lien" name="lien" />

              <label htmlFor="category">category :</label>
              <input type="text" id="category" name="category" />

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
        </>
      )}
      ;
    </>
  );
}

export default AdminProjetsAdd;
