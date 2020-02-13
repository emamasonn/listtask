import { ADD_TODO, EDIT, DELETE, FINISH } from "../types/types"


const initialState = {
  listTask: [
  {
      id: 0,
      title: 'Este es el titlulo',
      text: 'Este es la tarea que hay que hacer',
      priority: '#e53935',
  },
  {
      id: 1,
      title: 'Este es el titlulo',
      text: 'Este es la tarea que hay que hacer',
      priority: '#4db6ac',
  },
  {
      id: 2,
      title: 'Este es el titlulo',
      text: 'Este es la tarea que hay que hacer',
      priority: '#7c4dff',
  },
  {
      id: 3,
      title: 'Este es el titlulo',
      text: 'Este es la tarea que hay que hacer',
      priority: '#e53935',
  },
  {
      id: 4,
      title: 'Este es el titlulo',
      text: 'Este es la tarea que hay que hacer',
      priority: '#7c4dff',
  },
],
selectedTask: {
      id: 0,
      title: '',
      text: '',
      priority: '',
      visivility: false
    }
}

export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        state = {
          listTask:[ ...state.listTask, action.payload],
          selectedTask: {
            id: 0,
            title: '',
            text: '',
            priority: '',
            visivility: false
      }
        }
        return state
      case EDIT:
          state = {
            listTask: state.listTask,
            selectedTask: {
                    id: action.dato.id,
                    title: action.dato.title,
                    text: action.dato.text,
                    priority: action.dato.background,
                    visivility: true
              }
          }
          return state 
      case FINISH:
        let newList = state.listTask.map(task => {
          if(task.id === action.dato.id){
            task.title = action.dato.title
            task.text = action.dato.text
            task.priority = action.dato.priority
          }
          return task
        })
        return {
          listTask: newList,
          selectedTask: {
            id: 0,
            title: '',
            text: '',
            priority: '',
            visivility: false
      }
        } 
      case DELETE:
        state = {
          listTask: state.listTask.filter(s => s.id !== action.id),
          selectedTask: {
            id: 0,
            title: '',
            text: '',
            priority: '',
            visivility: false
          }
        }
        return state 
      default:
        return state
    }
  }
  