function FamousPersonForm(props) {
  return (
      <form onSubmit={props.addPerson}>
      <label htmlFor="name-input">Name:</label>
      <input id="name-input" value={props.famousPersonName} onChange={e => props.setPersonName(e.target.value)} />
      <label htmlFor="role-input">Famous for:</label>
      <input id="role-input" value={props.famousPersonRole} onChange={e => props.setPersonRole(e.target.value)} />
      <button type="submit">Done</button>
    </form>
  )
}

export default FamousPersonForm;