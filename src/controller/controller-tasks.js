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
  serviceTarefa.Update(req.params.id_tarefa, req.body, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
}

function Delete(req, res) {
  serviceTarefa.Delete(req.params.id_tarefa, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
}

export default { Select, Insert, Update, Delete };
