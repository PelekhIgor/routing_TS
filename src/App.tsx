import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

import { Todo } from "./components/todos";
import { Contact } from "./components/contacts";
import CreateContact from "./components/contacts/create";
import CreateTodo from "./components/todos/create";
import EditTodo from "./components/todos/edit";
import TodoList from "./components/todos/list";
import ContactList from "./components/contacts/list";
import EditContact from "./components/contacts/edit";
function App() {
  return (
      <div className="App">
        <Router>
          <Header></Header>

          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>

            <Route path="/todos" element={<Todo />}>
              <Route index element={<TodoList />}></Route>
              <Route path=":todoId" element={<EditTodo />}></Route>
              <Route path="create" element={<CreateTodo />}></Route>
            </Route>

            <Route path="/contacts" element={<Contact />}>
              <Route index element={<ContactList />}></Route>
              <Route path=":contactId" element={<EditContact />}></Route>
              <Route path="create" element={<CreateContact />}></Route>
            </Route>

          </Routes>

        </Router>


      </div>
  );
}

export default App;
