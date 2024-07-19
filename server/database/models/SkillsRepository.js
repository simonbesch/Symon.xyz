const AbstractRepository = require("./AbstractRepository");

class SkillsRepository extends AbstractRepository {
  constructor() {
    super({ table: "skills" });
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

  async update(skills) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, level = ?, levelCSS = ?, description = ?, category = ?, icon = ? where id = ?`,

      [
        skills.name,
        skills.level,
        skills.levelCSS,
        skills.description,
        skills.category,
        skills.icon,
        skills.id,
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

  async create(skills) {
    // Execute the SQL INSERT query to add a new terminal to the "terminal" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, level, levelCSS, description, category, icon) values (?, ?, ?, ?, ?, ?)`,
      [
        skills.name,
        skills.level,
        skills.levelCSS,
        skills.description,
        skills.category,
        skills.icon,
      ]
    );

    // Return the ID of the newly inserted terminal
    return result.insertId;
  }
}

module.exports = SkillsRepository;
