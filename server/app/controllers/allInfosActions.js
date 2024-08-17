const tables = require("../../database/tables");

const read = async (req, res, next) => {
  try {
    const all_infos = await tables.all_infos.read(req.params.id);
    if (all_infos == null) {
      res.sendStatus(404);
    } else {
      res.json(all_infos);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const all_infos = { ...req.body, id: req.params.id };
  console.log(all_infos);

  try {
    await tables.all_infos.update(all_infos);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(544);
    next(err);
  }
};

module.exports = {
  read,
  edit,
};
