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

module.exports = {
  login,
};
