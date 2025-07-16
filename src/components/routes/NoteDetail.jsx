import React from "react";
import NoteArea from "../ui/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../NoteTextArea";

const NoteDetail = () => {
  return (
    <NoteArea>
      <FlexRow>
        <div>
          <span className="text-gray-400 text-sm">2025년 07년 15일</span>
          <h3 className="text-gray-200 text-2xl font-bold">안녕하시요</h3>
        </div>
        <button className="bg-danger text-white rounded py-1 px-3">삭제</button>
      </FlexRow>
      <div className="flex gap-2 my-4">
        <NoteTextArea title="메모" isReadOnly={false}>
          <div className="my-4">
            <button className="bg-primary text-white rounded py-1 px-3">요약</button>
          </div>
        </NoteTextArea>
        <NoteTextArea title="요약 결과" isReadOnly={true}/>
      </div>
    </NoteArea>
  );
};

export default NoteDetail;
