const AbstractRepository = require("./AbstractRepository");

class AllInfosRepository extends AbstractRepository {
  constructor() {
    super({ table: "all_infos" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(all_infos) {
    const [result] = await this.database.query(
      `update ${this.table} set dispo = ?, mail = ?, lnk = ?, github = ?, insta = ?, about = ?, info1 = ?, info2 = ?, info3 = ?, info4 = ?, info5 = ? where id = ?`,

      [
        all_infos.dispo,
        all_infos.mail,
        all_infos.lnk,
        all_infos.github,
        all_infos.insta,
        all_infos.about,
        all_infos.info1,
        all_infos.info2,
        all_infos.info3,
        all_infos.info4,
        all_infos.info5,
        all_infos.id,
      ]
    );
    console.info(result.affectedRows);
    return result.affectedRows;
  }
}

module.exports = AllInfosRepository;
