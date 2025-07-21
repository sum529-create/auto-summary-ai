import { Link, useNavigate } from "react-router-dom";
import NoteList from "../nav/NavNoteList";
import Button from "../ui/Button";

const NavSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const id = crypto.randomUUID();
    
    navigate(`/notes/${id}`)
  }
  return (
    <div className="min-w-60 py-4 px-5 bg-sumi-night">
      <Link to="/" className="cursor-pointer text-2xl text-sumi-moon">AsA</Link>
      <Button onClick={handleClick} variant="light" fullWidth={true} className="my-4">노트 작성</Button>
      <NoteList/>
    </div>
  );
};

export default NavSection;