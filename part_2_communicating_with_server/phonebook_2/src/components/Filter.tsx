const Filter = ({ searchQuery, handleSearchQueryChange }: { searchQuery: string, handleSearchQueryChange: React.ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <div>
      filter shown with
      {" "}
      <input value={searchQuery} onChange={handleSearchQueryChange} />
    </div>
  )
}

export default Filter