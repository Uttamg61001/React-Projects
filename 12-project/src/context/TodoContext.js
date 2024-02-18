import {createContext, useContext} from "react"
export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: "todo msg",
            completes: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.provider