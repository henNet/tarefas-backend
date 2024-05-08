import serviceTarefa from "../services/services-tasks.js";

function Select(req, res) {
  serviceTarefa.Select(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
}

function Insert(req, res) {
  serviceTarefa.Insert(req.body, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(result[0]);
    }
  });
}

function Update(req, res) {
  res.status(200).send("Atualizando tarefas ...");
}

function Delete(req, res) {
  res.status(200).send("Excluindo tarefas ...");
}

export default { Select, Insert, Update, Delete };
