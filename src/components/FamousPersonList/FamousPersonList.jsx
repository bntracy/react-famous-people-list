function FamousPersonList(props) {
    return (
        <ul>
            {/* Render the list of famous people */}
            {props.famousPeopleArray.map(person => (<li key={person.id}>{person.name} is famous for "{person.role}".</li>))}
        </ul>
    );
}

export default FamousPersonList;