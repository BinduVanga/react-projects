import React from 'react';

const HistoryList = ({ history, setHistory, setTodos }) => {
    const deleteTask = (id) => {
        setHistory(history.filter(task => task.id !== id));
    }
    const markInComplete= (task)=>{
        setHistory(history.filter(t=>t.id !== task.id));
        setTodos(prev => [...prev,{...task, Completed:false,createdAt:Date.now()}]);
    }
    return (
        <div>
            <h3>History (Completed Tasks)</h3>
            {history.map(task => (
                <div key={task.id}>{task.title}
                    <button onClick={() => markInComplete(task)}>Mark Incomplete</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default HistoryList;