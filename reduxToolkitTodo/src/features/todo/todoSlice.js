import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer

// Features is known as slice in technical terms.

// For creating any slice, a method is inbuilt known as createSlice. Now the createSlice needs three parameters for its functionality: name, initialState, a list of reducers in which the working will done.

// Now, the list of reducers have basically access of two methods: state & action, in which state is consists of updated state value in the store (here, store.js) and action is consists of various things (here, we only know about action.payload)

// The biggest advantage of redux-toolkit is that the state is preserve here, we don't have to do a long chain of instructions (state: find array -> spread them -> enter value). That's what we do in context API