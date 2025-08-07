import NoteList from "../notes/NoteList";
import NoteArea from "../notes/NoteArea";
import SortedArea from "../notes/SortedArea";
import { useSelector } from "react-redux";
import Empty from "../ui/Empty";

const Notes = () => {
  const notes = useSelector(state => state.notes.lists);
  return (
    <NoteArea>
      {
        notes && notes.length > 0 ? 
        <>
          <SortedArea/>
          <NoteList/>
        </>
        :
        <Empty/>
      }
    </NoteArea>
  );
};

export default Notes;
