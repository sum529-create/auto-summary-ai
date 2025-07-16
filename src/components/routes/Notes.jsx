import NoteList from "../notes/NoteList";
import NoteArea from "../notes/NoteArea";
import SortedArea from "../notes/SortedArea";

const Notes = () => {
  return (
    <NoteArea>
      <SortedArea/>
      <NoteList/>
    </NoteArea>
  );
};

export default Notes;
