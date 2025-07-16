import React, { useState } from "react";
import SortButton from "./SortedButton";

const SortedArea = () => {
  const [sorted, setSorted] = useState('recently');

  return (
    <div className="flex justify-end gap-2">
      <SortButton onToggle={() => setSorted('recently')} isSelected={sorted === 'recently' ? true : false}>
        최근
      </SortButton>
      <SortButton onToggle={() => setSorted('firstName')} isSelected={sorted === 'firstName' ? true : false}>
        이름 순
      </SortButton>
    </div>
  )
}

export default SortedArea