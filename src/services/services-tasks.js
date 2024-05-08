import { db } from "../database/database.js";

function Select(callback) {
  let sql = "select * from Tarefas";

  db.all(sql, [], function (err, rows) {
    callback(err, rows);
  });
}

function Insert(body, callback) {
  let sql =
    "insert into Tarefas(descricao, concluido) values(?, ?) returning id_tarefa";
  db.all(sql, [body.descricao, body.concluido], function (err, rows) {
    callback(err, rows);
  });
}

export default { Select, Insert };
