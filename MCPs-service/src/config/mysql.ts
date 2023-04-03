import mysql from "mysql2";

class MySQLConnection {
  private static instance: MySQLConnection;
  private pool: mysql.Pool;

  private constructor() {
    this.pool = mysql.createPool({
      host: "mysql-srv",
      password: "password123",
      user: "root",
      port: 3306,
      database: "mcps",
    });
  }

  public static getInstance(): MySQLConnection {
    if (!MySQLConnection.instance) {
      MySQLConnection.instance = new MySQLConnection();
    }

    return MySQLConnection.instance;
  }

  public query(sql: string, args?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pool.query(sql, args, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }
}

export default MySQLConnection.getInstance();
