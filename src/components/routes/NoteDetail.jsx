import React from "react";
import NoteArea from "../notes/NoteArea";
import FlexRow from "../ui/FlexRow";
import NoteTextArea from "../notes/NoteTextArea";
import Button from "../ui/Button";

const NoteDetail = () => {
  return (
    <NoteArea>
      <FlexRow>
        <div>
          <span className="text-gray-400 text-sm">2025년 07년 15일</span>
          <h3 className="text-gray-200 text-2xl font-bold">안녕하시요</h3>
        </div>
        <Button variant="danger">삭제</Button>
      </FlexRow>
      <div className="flex gap-2 my-4">
        <NoteTextArea title="메모" isReadOnly={false}>
          <div className="my-4">
            <Button>요약</Button>
          </div>
        </NoteTextArea>
        <NoteTextArea title="요약 결과" isReadOnly={true}/>
      </div>
    </NoteArea>
  );
};

export default NoteDetail;
