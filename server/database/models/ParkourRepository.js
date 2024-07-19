const AbstractRepository = require("./AbstractRepository");

class ParkourRepository extends AbstractRepository {
  constructor() {
    super({ table: "parkour" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(parkour) {
    const [result] = await this.database.query(
      `update ${this.table} set date = ?, lieu = ?, poste = ?, structure = ?, type = ?, actuel = ?, description = ? where id = ?`,

      [
        parkour.date,
        parkour.lieu,
        parkour.poste,
        parkour.structure,
        parkour.type,
        parkour.actuel,
        parkour.description,
        parkour.id,
      ]
    );
    console.info(result.affectedRows);
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows;
  }

  async create(parkour) {
    // Execute the SQL INSERT query to add a new terminal to the "terminal" table
    const [result] = await this.database.query(
      `insert into ${this.table} (date, lieu, poste, structure, type, actuel, description) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        parkour.date,
        parkour.lieu,
        parkour.poste,
        parkour.structure,
        parkour.type,
        parkour.actuel,
        parkour.description,
      ]
    );

    // Return the ID of the newly inserted terminal
    return result.insertId;
  }
}

module.exports = ParkourRepository;
