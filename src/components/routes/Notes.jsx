import NoteList from "../NoteList";
import NoteArea from "../ui/NoteArea";
import SortedArea from "../ui/SortedArea";

const Notes = () => {
  return (
    <NoteArea>
      <SortedArea/>
      <NoteList/>
    </NoteArea>
  );
};

export default Notes;
