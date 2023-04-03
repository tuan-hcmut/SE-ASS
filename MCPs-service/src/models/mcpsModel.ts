import db from "./../config/mysql";

export default function createTables() {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER NOT NULL AUTO_INCREMENT,
      fullName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      photo VARCHAR(255) NOT NULL,
      role ENUM('Backofficer', 'Janitor', 'Collector') NOT NULL DEFAULT 'Janitor'
      PRIMARY KEY (id)
    );
    
    CREATE TABLE IF NOT EXISTS mcpsPoints (
      id INTEGER NOT NULL AUTO_INCREMENT,
      longiude VARCHAR(255) NOT NULL,
      latitude VARCHAR(255) NOT NULL,
      capacity VARCHAR(255) NOT NULL,
      user_id INT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      PRIMARY KEY (id)
    );
  `;
  return db.query(sql);
}
