const PersonForm = ({
  newName,
  newNumber,
  addPerson,
  handleNoteChange,
  handleNumberChange
}:
  {
    newName: string,
    newNumber: string,
    addPerson: React.FormEventHandler<HTMLFormElement>,
    handleNoteChange: React.ChangeEventHandler<HTMLInputElement>,
    handleNumberChange: React.ChangeEventHandler<HTMLInputElement>
  }) => {

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleNoteChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm