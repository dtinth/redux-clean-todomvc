import * as TodoList from '../todos/TodoList'

const todos = (state = TodoList.empty, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return TodoList.addTodo(action.id, action.text)(state)
    case 'TOGGLE_TODO':
      return TodoList.toggleCompletedById(action.id)(state)
    default:
      return state
  }
}

export default todos
