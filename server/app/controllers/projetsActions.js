const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const projets = await tables.projets.readAll();

    res.json(projets);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const projets = await tables.projets.read(req.params.id);
    if (projets == null) {
      res.sendStatus(404);
    } else {
      res.json(projets);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const projets = { ...req.body, id: req.params.id };
  try {
    await tables.projets.update(projets);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(520);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.projets.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const projets = req.body;
  try {
    const insertId = await tables.projets.create(projets);
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
