const AbstractRepository = require("./AbstractRepository");

class ProjetsRepository extends AbstractRepository {
  constructor() {
    super({ table: "projects" });
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

  async update(projets) {
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, description1 = ?, description2 = ?, description3 = ?, mates = ?, github = ?, online = ?, lien = ?, category = ?, img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ?, img6 = ?, img7 = ?, img8 = ?, img9 = ?, img10 = ? where id = ?`,

      [
        projets.title,
        projets.description1,
        projets.description2,
        projets.description3,
        projets.mates,
        projets.github,
        projets.online,
        projets.lien,
        projets.category,
        projets.img1,
        projets.img2,
        projets.img3,
        projets.img4,
        projets.img5,
        projets.img6,
        projets.img7,
        projets.img8,
        projets.img9,
        projets.img10,
        projets.id,
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

  async create(projets) {
    // Execute the SQL INSERT query to add a new terminal to the "terminal" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description1, description2, description3, mates, github, online, lien, category, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        projets.title,
        projets.description1,
        projets.description2,
        projets.description3,
        projets.mates,
        projets.github,
        projets.online,
        projets.lien,
        projets.category,
        projets.img1,
        projets.img2,
        projets.img3,
        projets.img4,
        projets.img5,
        projets.img6,
        projets.img7,
        projets.img8,
        projets.img9,
        projets.img10,
      ]
    );

    // Return the ID of the newly inserted terminal
    return result.insertId;
  }
}

module.exports = ProjetsRepository;
