import { TodoItemPropsI } from "./type";
import "./todo.css";
import { useNavigate } from "react-router-dom";
export default function TodoItem({ todo, cb }: TodoItemPropsI): JSX.Element {
  const navigate = useNavigate();
  function onEdit() {
    navigate("/todos/" + todo.id);
  }
  return (
    <div className={todo.isComplete ? "item complete" : "item"}>
      <div>{todo.title}</div>
      <div>{todo.body}</div>
      <button>Delete</button>
      <button>Complete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}
