export const selectNoteById = (id) => (state) => {
  return state.notes.lists.find(e => e.id.toString() === id.toString());
}