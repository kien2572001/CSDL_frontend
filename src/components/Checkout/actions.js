export const UPDATE = 'UPDATE'
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } }
}
