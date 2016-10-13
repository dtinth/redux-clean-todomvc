import * as TodoList from '../todos/TodoList'

import { connect } from 'react-redux'

import TodoListView from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return TodoList.getAllTodos(todos)
    case 'SHOW_COMPLETED':
      return TodoList.getCompletedTodos(todos)
    case 'SHOW_ACTIVE':
      return TodoList.getActiveTodos(todos)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView)

export default VisibleTodoList
