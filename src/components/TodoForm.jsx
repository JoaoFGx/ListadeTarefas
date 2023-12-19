import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [cetegory, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviou form!");
  };

  return (
    <div className="todo-form">
     <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite o título" />
      <select>
        <option value="">Seleceione uma categoria</option>
        <option value="Trabalho">Seleceione uma categoria</option>
        <option value="Pessoal">Seleceione uma categoria</option>
        <option value="Estudos">Seleceione uma categoria</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  </div>
  );
};

export default TodoForm;