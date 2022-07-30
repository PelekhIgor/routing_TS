import { useEffect, useState } from "react";
import api from "../../utils/api";
import { TodoI } from "./type";
import { useNavigate, useParams } from "react-router-dom";
export default function EditTodo() {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const initialState: TodoI = { title: "", body: "", isComplete: false };
  const [todo, setTodo] = useState(initialState);
  useEffect(() => {
    api.get("todos/" + params.userId).then((r) => setTodo(r.data));
  }, []);
  function onCreateTodo(): void {
    api.put("todos/" + todo.id, todo).then((r) => navigate("/todos"));
  }
  return (
    <div>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
      />
      <button onClick={onCreateTodo}>Create</button>
    </div>
  );
}
