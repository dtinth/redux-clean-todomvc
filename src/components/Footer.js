import * as VisibilityFilter from '../todos/VisibilityFilter'

import React from 'react'

import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
