import NoteList from "../nav/NavNoteList";

const NavSection = () => {
  return (
    <div className="min-w-60 py-4 px-5 bg-sumi-night">
      <h2 className="text-2xl text-sumi-moon">AsA</h2>
      <button className="bg-gray-300 py-2 px-1 w-full hover:bg-gray-400 rounded my-3">노트 작성</button>
      <NoteList/>
    </div>
  );
};

export default NavSection;
