import NoteList from "../nav/NavNoteList";
import Button from "../ui/Button";

const NavSection = () => {
  return (
    <div className="min-w-60 py-4 px-5 bg-sumi-night">
      <h2 className="text-2xl text-sumi-moon">AsA</h2>
      <Button variant="light" fullWidth={true} className="my-4">노트 작성</Button>
      <NoteList/>
    </div>
  );
};

export default NavSection;
