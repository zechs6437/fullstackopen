import { useState, useEffect } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    const existingUser = persons.find(name => (
      name['name'] ===  newName
    ))
    if (!existingUser) {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    } else {
      if (confirm(`${existingUser.name} already exists in phonebook. Do you want to replace the old number with a new one?`)) {
        personService
          .update(existingUser.id, nameObject)
          .then(returnedPerson => {
            const newPersons = persons.map(person => (
              person.id === returnedPerson.id ? returnedPerson : person
            ))
            setPersons(newPersons)
          })
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  const deleteName = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      personService
        .removeEntry(person.id)
        .then(response => {
          setPersons(persons.filter(person => (
            person.id !== response.id
          )))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterValue}
        onChange={handleFilterChange}
      />
      <h2>Add New Number</h2>
      <PersonForm
        onSubmit={addName}
        nameValue={newName}
        nameOnChange={handleNameChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Name 
        persons={persons} 
        filter={filterValue} 
        deleteHandler={deleteName} 
      />
    </div>
  )
}

export default App