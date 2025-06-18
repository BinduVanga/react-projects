import { useState } from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const toggleComplete = () => {
        setTodos(
            todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)
        );
    }

    const deleteTodo = () => {
        setTodos(todos.filter(t => t.id !== todo.id));
    }

    const saveEdit = () => {
        setTodos(todos.map(t => t.id === todo.id ? { ...t, title: editTitle } : t));
        setIsEditing(false);
    }

    return (
        <div>
            {
                isEditing ? (
                    <>
                        <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                        <button onClick={saveEdit}>Save</button>
                    </>
                ) : (<>
                    <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.title}
                    </span>
                    <button onClick={toggleComplete}>{todo.completed ? "Undo" : "Complete"}</button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={deleteTodo}>Delete</button>
                </>)}
        </div>
    );
};
export default TodoItem;