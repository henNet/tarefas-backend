import { db } from "../database/database.js";

function Select(callback) {
  let sql = "select * from Tarefas";

  db.all(sql, [], function (err, rows) {
    callback(err, rows);
  });
}

function Insert(body, callback) {
  let sql =
    "insert into Tarefas(descricao, concluido) " +
		"values(?, ?) returning id_tarefa";

  db.all(sql, [body.descricao, body.concluido], function (err, rows) {
    callback(err, rows);
  });
}

function Update(id_tarefa, body, callback) {
  let sql =
    "update Tarefas " + 
		"set descricao=?, concluido=? " +
		"where id_tarefa = ? returning id_tarefa";

  db.all(
    sql,
    [body.descricao, body.concluido, id_tarefa],
    function (err, rows) {
      callback(err, rows);
    }
  );
}

function Delete(id_tarefa, callback) {
  let sql =
    "delete from Tarefas " + 
		"where id_tarefa = ? returning id_tarefa";

  db.all(
    sql,
    [id_tarefa],
    function (err, rows) {
      callback(err, rows);
    }
  );
}

export default { Select, Insert, Update, Delete };
