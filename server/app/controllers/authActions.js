const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      delete user.password;

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role_id,
          email: user.email,
        },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("authData", token, {
        maxAge: 3600000,
        //httpOnly: true,  // EmpÃªche l'accÃ¨s au cookie via JavaScript cÃ´tÃ© client
        //secure: true,    // Assure que le cookie est envoyÃ© uniquement via HTTPS
        //sameSite: 'None', // Permet l'envoi de cookies dans des requÃªtes cross-origin
        //domain: '.symon.xyz', // Partage entre sous-domaines
      });

      res.sendStatus(200);
    } else {
      res.sendStatus(440);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editmdp = async (req, res, next) => {
  try {
    if (req.body.nouveaumdp === req.body.nouveaumdpconf) {
      const user = await tables.user.readByEmailWithPassword(req.body.email);

      if (user == null) {
        res.sendStatus(422);
        return;
      }

      const verified = await argon2.verify(user.password, req.body.ancienmdp);

      const hashingOptions = {
        type: argon2.argon2id,
        memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
        timeCost: 2,
        parallelism: 1,
      };

      if (verified) {
        // Extraction du mot de passe de la requête

        const { nouveaumdp } = req.body;

        if (nouveaumdp !== null) {
          // Hachage du mot de passe avec les options spécifiées
          const hashedPassword = await argon2.hash(nouveaumdp, hashingOptions);

          // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
          req.body.hashedPassword = hashedPassword;
        }

        // Suppression du mot de passe non haché de la requête par mesure de sécurité
        delete req.body.nouveaumdp;
        delete req.body.ancienmdp;

        const hashpass = { ...req.body, id: req.params.id };
        try {
          await tables.user.update(hashpass);

          delete req.body.hashedPassword;

          res.clearCookie("authData");

          const token = jwt.sign(
            {
              id: user.id,
              role: user.role_id,
              email: user.email,
            },
            process.env.APP_SECRET,
            { expiresIn: "1h" }
          );

          res.cookie("authData", token, {
            maxAge: 3600000,
            //httpOnly: true,  // EmpÃªche l'accÃ¨s au cookie via JavaScript cÃ´tÃ© client
            //secure: true,    // Assure que le cookie est envoyÃ© uniquement via HTTPS
            //sameSite: 'None', // Permet l'envoi de cookies dans des requÃªtes cross-origin
            //domain: '.symon.xyz', // Partage entre sous-domaines
          });
          res.sendStatus(204);
        } catch (err) {
          res.sendStatus(520);
          next(err);
        }
      } else {
        res.sendStatus(440);
      }
    } else {
      res.sendStatus(440);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editmail = async (req, res, next) => {
  try {
    if (req.body.nouveaumail === req.body.confmail) {
      const user = await tables.user.readByEmailWithPassword(req.body.email);

      if (user == null) {
        res.sendStatus(422);
        return;
      }

      const verified = await argon2.verify(user.password, req.body.mdp);

      if (verified) {
        // Suppression du mot de passe non haché de la requête par mesure de sécurité
        delete req.body.mdp;
        delete req.body.confmail;

        const newmail = { ...req.body, id: req.params.id };

        try {
          await tables.user.updatemail(newmail);

          res.clearCookie("authData");

          const token = jwt.sign(
            {
              id: user.id,
              role: user.role_id,
              email: user.email,
            },
            process.env.APP_SECRET,
            { expiresIn: "1h" }
          );

          res.cookie("authData", token, {
            maxAge: 3600000,
            //httpOnly: true,  // EmpÃªche l'accÃ¨s au cookie via JavaScript cÃ´tÃ© client
            //secure: true,    // Assure que le cookie est envoyÃ© uniquement via HTTPS
            //sameSite: 'None', // Permet l'envoi de cookies dans des requÃªtes cross-origin
            //domain: '.symon.xyz', // Partage entre sous-domaines
          });
          res.sendStatus(204);
        } catch (err) {
          res.sendStatus(520);
          next(err);
        }
      } else {
        res.sendStatus(440);
      }
    } else {
      res.sendStatus(440);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
  editmdp,
  editmail,
};
