const AbstractRepository = require("./AbstractRepository");
class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }

  async update(hashpass) {
    const [result] = await this.database.query(
      `update ${this.table} set password = ? where email = ?`,

      [hashpass.hashedPassword, hashpass.email]
    );
    return result.affectedRows;
  }

  async updatemail(newmail) {
    const [result] = await this.database.query(
      `update ${this.table} set email = ? where email = ?`,

      [newmail.nouveaumail, newmail.email]
    );
    return result.affectedRows;
  }
}

module.exports = UserRepository;
