import { Form } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";
import Nop from "../../components/Nop";
import { useState } from "react";

function EditMdp() {
  const { isAdmin } = useAdmin();
  const [mdp, setMdp] = useState("");
  const [mdpconf, setMdpconf] = useState("");

  const changemdp = (event) => {
    setMdp(event.target.value);
  };

  const changeNewmdp = (event) => {
    setMdpconf(event.target.value);
  };

  return (
    <>
      {isAdmin === false ? (
        <Nop />
      ) : (
        <div className="EditAddContainer">
          <h1> Edit mot de passe: </h1>
          <Form method="put" className="formGlobal">
            <div className="form-group">
              <label htmlFor="email">Mail :</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="votre adresse mail du compte"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ancienmdp">Ancien mdp :</label>
              <input type="text" id="ancienmdp" name="ancienmdp" required />
            </div>
            <div className="form-group">
              <label htmlFor="nouveaumdp">nouveau mdp :</label>
              <input
                type="text"
                id="nouveaumdp"
                name="nouveaumdp"
                onChange={changemdp}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nouveaumdpconf">
                confirmation du nouveau mdp :
              </label>
              <input
                type="text"
                id="nouveaumdpconf"
                name="nouveaumdpconf"
                onChange={changeNewmdp}
                required
              />
            </div>
            {mdp === mdpconf ? (
              <div>
                <button type="submit">Modifier</button>
              </div>
            ) : (
              <div>
                <button type="submit" disabled="disabled">
                  mot de passe différent
                </button>
              </div>
            )}
          </Form>
        </div>
      )}
    </>
  );
}

export default EditMdp;
