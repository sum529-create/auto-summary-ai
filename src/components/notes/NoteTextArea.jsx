import { cn } from "../../lib/utils"

const NoteTextArea = ({title, content, isReadOnly, onChange, children}) => {
  return (
    <div className="bg-sumi-night p-4 rounded flex-1">
      <h4 className='text-lg my-1 text-sumi-starlight'>{title}</h4>
      <textarea 
        className={cn(`w-full p-4 min-h-60 resize-none outline-none focus:(ring-2 ring-blue-500) ${isReadOnly ? 'bg-gray-500' : 'bg-gray-200'}`)}
        name="note-content" 
        id="note-content" 
        onChange={e => onChange(e.target.value)}
        aria-label={title} readOnly={isReadOnly}
        value={content}
        placeholder={!isReadOnly ? '메모를 적어주세요.' : undefined}
      />
      {children}
    </div>
  )
}

export default NoteTextArea