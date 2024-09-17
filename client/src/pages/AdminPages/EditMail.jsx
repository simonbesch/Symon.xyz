import { Form } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";
import { useState } from "react";

function EditEmail() {
  const { isAdmin } = useAdmin();
  const [mail, setmail] = useState("");
  const [mailConf, setMailConf] = useState("");

  const changeMail = (event) => {
    setmail(event.target.value);
  };

  const changeNewMail = (event) => {
    setMailConf(event.target.value);
  };

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> Edit du mail :</h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="email">Ancien mail :</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="adresse mail du compte"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nouveaumail">Nouveau mail :</label>
              <input
                type="text"
                id="nouveaumail"
                name="nouveaumail"
                onChange={changeMail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confmail">Confirmation mail :</label>
              <input
                type="text"
                id="confmail"
                name="confmail"
                onChange={changeNewMail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mdp">Mot de passe :</label>
              <input type="text" id="mdp" name="mdp" required />
            </div>
            {mail === mailConf ? (
              <div>
                <button type="submit">Modifier</button>
              </div>
            ) : (
              <div>
                <button type="submit" disabled="disabled">
                  mail différent
                </button>
              </div>
            )}
          </Form>
        </div>
      )}
    </>
  );
}

export default EditEmail;
