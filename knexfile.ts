import path from "path";

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "scr", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "scr", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "scr", "database", "seeds"),
  },
  useNullAsDefault: true,
};
