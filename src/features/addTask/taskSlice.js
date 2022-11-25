import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // {
    //     id: 1,
    //     name: "task1",
    //     assignee: "joseph",
    //     dueDate: "2022-02-02",
    //     detail: "lorem ipsum...",
    //     priority: "High"
    // },
    // {
    //     id: 2,
    //     name: "task2",
    //     assignee: "elton",
    //     dueDate: "2022-03-02",
    //     detail: "lorem ipsum...",
    //     priority: "Low"
    // },
]

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        taskAdded: (state, action) => {
            console.log(state)
            state.push(action.payload)
        },

        setTasks: (state, action) => {
            console.log(action.payload)
            state = action.payload
            return state
        },

        taskDeleted: (state, action) => {
            console.log(state);
            console.log(action.payload);
            // state = state.filter((s) => { s.id !== action.payload });
            state = action.payload
            return state
            // console.log(state)
        },
    }
})

export const { taskAdded, setTasks, taskDeleted } = taskSlice.actions

export default taskSlice.reducer