const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const parkour = await tables.parkour.readAll();

    res.json(parkour);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const parkour = await tables.parkour.read(req.params.id);
    if (parkour == null) {
      res.sendStatus(404);
    } else {
      res.json(parkour);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const parkour = { ...req.body, id: req.params.id };
  try {
    await tables.parkour.update(parkour);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(520);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.parkour.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const parkour = req.body;
  try {
    const insertId = await tables.parkour.create(parkour);
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
