import { ADD_TODO, EDIT, DELETE, FINISH } from "../types/types"

export const addTask = payload => ({ type: ADD_TODO, payload })

export const editTask = (task) => ({type: EDIT, dato: task})

export const finishEdit = (task) => ({type: FINISH, dato: task})

export const deleteTask = id => ({type: DELETE, id})