import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing To Do!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul  className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li
          style={{background:'greenYellow'}}
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span
              className={`flex-1 ml-12 cursor-pointer ${todo.complete &&
                "line-through text-red"}`}
                style={{color:'green'}}
            >
              {todo.text}
            </span>
            <button>
              <img
              style={{color:'orange'}}
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit"
                className="h-6"
              />
            </button>
            <button>
              <img
              style={{color:'red'}}
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete"
                className="h-6"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
