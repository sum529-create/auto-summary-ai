import React from "react";
import { Link } from "react-router-dom";
import NavNoteListItem from "./NavNoteListItem";

const NavNoteList = () => {
  return (
    <ul className="flex gap-1 flex-col">
      <li className="text-sumi-nebula">
        <Link to="/">홈</Link>
      </li>
      <NavNoteListItem/>
    </ul>
  )
};

export default NavNoteList;
