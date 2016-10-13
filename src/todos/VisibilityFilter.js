
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

// -- Initializer --
//
export const initial = SHOW_ALL

// -- State Updater --
//
export const changeTo = (nextFilter) => (filter) => nextFilter
