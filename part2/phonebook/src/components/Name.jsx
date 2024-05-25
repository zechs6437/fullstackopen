const Name = ({ persons, filter }) => {
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
      {prop.name} {prop.number}
    </div>
  ));
};

export default Name