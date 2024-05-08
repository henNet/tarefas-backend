import sqlite3 from "sqlite3";

/* Cria a conexão com o banco */
const SQLite3 = sqlite3.verbose();

const db = new SQLite3.Database("bando.db", SQLite3.OPEN_READWRITE, 
(err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

export {db};