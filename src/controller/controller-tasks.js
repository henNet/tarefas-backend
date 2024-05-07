function Select(req, res) {
    res.status(200).send("Listando tarefas ...");
}

function Insert(req, res) {
    res.status(201).send("Adicionando tarefas ...");
}

function Update(req, res) {
    res.status(200).send("Atualizando tarefas ...");
}

function Delete(req, res) {
    res.status(200).send("Excluindo tarefas ...");
}

export default { Select, Insert, Update, Delete };
