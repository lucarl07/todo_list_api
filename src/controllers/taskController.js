import Tarefa from "../models/taskModel.js"

// Buscar por todas as tarefas:
export const getAllTasks = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll()
    res.status(200).json(tarefas)
  } catch (error) {
    res.status(500).json({
      err: "Erro interno ao listar tarefas."
    })
  }
}

// Adicionar uma nova tarefa:
export const createNewTask = async (req, res) => {
  const { nome, descricao } = req.body
  const status = "pendente"

  const novaTarefa = { 
    nome, descricao, status 
  }

  try {
    await Tarefa.create(novaTarefa)
    res.status(201).json({
      message: "Tarefa cadastrada com sucesso!"
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err: "Erro interno ao criar nova tarefa."
    })
  }
}