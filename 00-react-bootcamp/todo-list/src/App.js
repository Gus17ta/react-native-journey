import { useState } from 'react'
import './index.css'

function TodoList() {
  const [tarefas, setTarefas] = useState([])
  const [inputTexto, setInputTexto] = useState("") 
  
   function adicionarTarefa() {
    if (inputTexto.trim() === "") return 
    const novaTarefa = {
      id: Date.now(),
      texto: inputTexto,
      completa: false
    }

    setTarefas([...tarefas, novaTarefa])
    setInputTexto("")
   }
  function deletarTarefa(id) { 

    const novasTarefas = tarefas.filter(tarefas => tarefas.id !== id)
    setTarefas(novasTarefas)
   }
  function marcarCompleta(id) { 

    const novasTarefas = tarefas.map (tarefa => 
      tarefa.id === id
      ? {...tarefa, completa: !tarefa.completa}
      : tarefa
     )
    setTarefas(novasTarefas)
   }
  function handleInputChange(e) { 

    setInputTexto(e.target.value)
   }

   const pendentes = tarefas.filter(t => !t.completa)
   const completas = tarefas.filter(t => t.completa)

   

  return (
    <div className="App">
      <h1>Todo List</h1>

   <div className="Filho">
   <input 
    value={inputTexto}
    onChange={handleInputChange}
    />
<button onClick={adicionarTarefa}>+</button>
    </div>

   <h2>Pendentes</h2>
    {pendentes.length === 0 ? (
      <p className="vazio">Nenhuma tarefa pendente 🎉</p>
    ) : (
      pendentes.map(tarefa => (
        <div key={tarefa.id} className="tarefa-item">
          <input
            type='checkbox'
            checked={tarefa.completa}
            onChange={() => marcarCompleta(tarefa.id)}
          />
          <span>{tarefa.texto}</span>
          <button 
            className="btn-deletar"
            onClick={() => deletarTarefa(tarefa.id)}
          >
            🗑️
          </button>
        </div>
      ))
    )}
      

      <h2>Completas</h2>
     {completas.length === 0 ? (
      <p className="vazio">Nenhuma tarefa completa ainda</p>
    ) : (
      completas.map(tarefa => (
        <div key={tarefa.id} className="tarefa-item">
          <input
            type='checkbox'
            checked={tarefa.completa}
            onChange={() => marcarCompleta(tarefa.id)}
          />
          <span className="tarefa-completa">{tarefa.texto}</span>
          <button 
            className="btn-deletar"
            onClick={() => deletarTarefa(tarefa.id)}
          >
            🗑️
          </button>
        </div>
      ))
    )}
  </div>
)
  
}

export default TodoList
