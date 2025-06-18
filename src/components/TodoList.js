import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos,setTodos}) => {
    const [newTitle,setNewTitle]= useState("");
    const addTodo =()=>{
        if(!newTitle.trim()) return
        const newTask ={
            id:Date.now(),
            title:newTitle,
            completed:false,
            createdAt:Date.now()
        };
        setTodos ([...todos,newTask]);
        setNewTitle("");
    }
return(
    <div>
        <h3>todo List</h3>
        <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        {
            todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
            ))
        }
    </div>
)
}

export default TodoList;