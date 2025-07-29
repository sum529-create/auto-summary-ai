import { useNavigate } from 'react-router-dom'
import { handleClick } from '../../hooks/useNoteActions'
import Button from './Button'

const Empty = () => {
  const navigate = useNavigate();
  return (
    <div className='text-center space-y-2'>
      <h3 className='text-white text-2xl'>Empty</h3>
      <p className='text-gray-300 text-base !my-5'>노트를 만들어보세요</p>
      <Button onClick={() => handleClick(navigate)} variant="light" className="my-4">노트 작성</Button>
    </div>
  )
}

export default Empty