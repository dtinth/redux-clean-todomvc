import * as Todo from './Todo.js'

// -- Initializer --
//
export const empty = [ ]

// -- State updaters --
//
export const addTodo = (id, title) => (todoList) => {
  const nextItem = Todo.initialize(id, title)
  const nextTodoList = [ ...todoList, nextItem ]
  return nextTodoList
}

const updateTodoById = (id, todoUpdater) => (todoList) => {
  return todoList.map((todo) => {
    if (Todo.getId(todo) === id) {
      return todoUpdater(todo)
    } else {
      return todo
    }
  })
}

export const toggleCompletedById = (id) => (todoList) => {
  return updateTodoById(id, Todo.toggleCompleted)(todoList)
}

// -- Queries --
//
export const getAllTodos = (todoList) => todoList

export const getCompletedTodos = (todoList) => {
  return todoList.filter(Todo.isCompleted)
}

export const getActiveTodos = (todoList) => {
  return todoList.filter(Todo.isActive)
}
