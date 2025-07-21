export const selectNoteById = (id) => (state) => {
  return state.notes.find(e => e.id.toString() === id.toString());
}