import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})
const TodoProvider = TodoContext.Provider;

function useTodo (){
    return useContext(TodoContext);
}

export { TodoProvider }
export default useTodo