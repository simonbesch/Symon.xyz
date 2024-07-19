const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const skills = await tables.skills.readAll();

    res.json(skills);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const skills = await tables.skills.read(req.params.id);
    if (skills == null) {
      res.sendStatus(404);
    } else {
      res.json(skills);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const skills = { ...req.body, id: req.params.id };
  try {
    await tables.skills.update(skills);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(520);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.skills.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const skills = req.body;
  try {
    const insertId = await tables.skills.create(skills);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  destroy,
  add,
};
