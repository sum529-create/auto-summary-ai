
export const handleClick = (navigate) => {
  const id = crypto.randomUUID();
  navigate(`/notes/${id}`)
}