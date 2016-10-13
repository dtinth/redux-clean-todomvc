// -- Initializer --
//
export const initialize = (id, text) => {
  return { id, text, completed: false }
}

// -- Updaters --
//
export const toggleCompleted = (todo) => {
  return { ...todo, completed: !todo.completed }
}

// -- Queries --
//
export const isCompleted = (todo) => todo.completed
export const isActive = (todo) => !todo.completed
export const getId = (todo) => todo.id
export const getText = (todo) => todo.text
