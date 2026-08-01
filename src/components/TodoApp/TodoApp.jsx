import { useEffect, useState } from "react";
import { TodoProvider } from "../../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };
    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)),
        );
    };
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
    };
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((eachTodo) =>
                eachTodo.id === id
                    ? { ...eachTodo, completed: !eachTodo.completed }
                    : eachTodo,
            ),
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos_key"));
        if (todos && todos.length > 0) setTodos(todos);
    }, []);
    useEffect(() => {
        localStorage.setItem("todos_key", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
            <div className="bg-slate-950 min-h-screen py-8">
                <h1 className="text-4xl font-bold text-center p-10 text-white">
                    Todo App
                </h1>
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg p-5 text-white bg-slate-800">
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((eachTodo) => (
                            <div key={eachTodo.id} className="w-full">
                                <TodoItem todo={eachTodo} />
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/" 
                    className="bg-slate-800 text-xl text-white px-2 py-1 rounded-lg absolute bottom-15 left-1/2 -translate-x-1/2 shadow-2xl shadow-black/40 hover:bg-slate-700">
                ← Back to Projects
                </Link>
            </div>
        </TodoProvider>
    );
}

export default TodoApp;
