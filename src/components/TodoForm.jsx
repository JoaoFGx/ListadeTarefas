import React from 'react'

function TodoForm() {
  return <div className="todo-form">
    <h2>Criar Tarefa:</h2>
    <form>
      <input type="text" placeholder="Digite o título" />
      <select>
        <option value="">Seleceione uma categoria</option>
        <option value="Trabalho">Seleceione uma categoria</option>
        <option value="Pessoal">Seleceione uma categoria</option>
        <option value="Estudos">Seleceione uma categoria</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  </div>;
}

export default TodoForm;