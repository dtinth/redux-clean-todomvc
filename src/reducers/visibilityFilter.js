import * as VisibilityFilter from '../todos/VisibilityFilter'

const visibilityFilter = (state = VisibilityFilter.initial, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return VisibilityFilter.changeTo(action.filter)(state)
    default:
      return state
  }
}

export default visibilityFilter
