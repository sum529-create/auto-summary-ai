export const selectNoteById = (id) => (state) => {
  const note = state.notes.find(e => e.id.toString() === id.toString());
  if(note) return note;
}