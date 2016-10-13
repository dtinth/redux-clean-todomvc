import * as Todo from '../todos/Todo'
import * as TodoList from '../todos/TodoList'
import * as VisibilityFilter from '../todos/VisibilityFilter'

import { connect } from 'react-redux'

import TodoListView from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return TodoList.getAllTodos(todos)
    case VisibilityFilter.SHOW_COMPLETED:
      return TodoList.getCompletedTodos(todos)
    case VisibilityFilter.SHOW_ACTIVE:
      return TodoList.getActiveTodos(todos)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const getTodoProps = (todo) => {
  return {
    id: Todo.getId(todo),
    text: Todo.getText(todo),
    completed: Todo.isCompleted(todo)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter).map(getTodoProps)
})

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView)

export default VisibleTodoList
