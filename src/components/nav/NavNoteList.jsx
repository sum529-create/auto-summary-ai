import React from "react";
import { Link } from "react-router-dom";
import NavNoteListItem from "./NavNoteListItem";
import { useSelector } from "react-redux";

const NavNoteList = () => {
  const notes = useSelector(state => state.notes.lists)
  return (
    <ul className="flex gap-1 flex-col">
      <li className="text-sumi-nebula">
        <Link to="/">홈</Link>
      </li>
      {
        notes.map(data => <NavNoteListItem key={data.id} data={data}/>)
      }
    </ul>
  )
};

export default NavNoteList;
