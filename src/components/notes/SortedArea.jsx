import SortButton from "./SortedButton";
import { useDispatch, useSelector } from "react-redux";
import { setSortedType } from "../../store/notesSlice";

const SortedArea = () => {
  const dispatch = useDispatch();
  const sorted = useSelector(state => state.notes.sortedType)

  return (
    <div className="flex justify-end gap-2">
      <SortButton onToggle={() => dispatch(setSortedType('recently'))} isSelected={sorted === 'recently' ? true : false}>
        최근
      </SortButton>
      <SortButton onToggle={() => dispatch(setSortedType('firstName'))} isSelected={sorted === 'firstName' ? true : false}>
        이름 순
      </SortButton>
    </div>
  )
}

export default SortedArea