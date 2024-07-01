const Name = ({ persons, filter, deleteHandler }) => {
  const newList =
    filter === ""
      ? persons
      : persons.filter(
          (person) =>
            person.name.toLowerCase().includes(filter.toLowerCase()) ||
            person.number.includes(filter)
        );
  return newList.map((prop) => (
    <div key={prop.name}>
      {prop.name} {prop.number} <button onClick={() => {deleteHandler(prop)}}>delete</button>
    </div>
  ));
};

export default Name
