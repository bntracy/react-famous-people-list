import FamousPerson from "../FamousPerson/FamousPerson";

function FamousPersonList(props) {
    return (
        <ul>
            {/* Render the list of famous people */}
            {props.famousPeopleArray.map(person => (<FamousPerson person={person} key={person.id}/>))}
        </ul>
    );
}

export default FamousPersonList;