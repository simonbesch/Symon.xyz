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
}

module.exports = UserRepository;
