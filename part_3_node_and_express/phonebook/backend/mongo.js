const mongoose = require('mongoose')

const init = () => {
  if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  const [password, name, number] = process.argv.slice(2)
  const url = `mongodb+srv://websterjs:${password}@cluster0.caowu7d.mongodb.net/phonebookApp?retryWrites=true&w=majority`
  
  mongoose.set('strictQuery', false)
  mongoose.connect(url)
  
  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })
  
  const Person = mongoose.model('Person', personSchema)

  if (process.argv.length === 3) printPersons(Person)
  if (process.argv.length > 3) createPerson(mongoose, Person, name, number)
}


const printPersons = (Person) => {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })

    mongoose.connection.close()
  })
}

const createPerson = (Person, name, number) => {
  const person = new Person({ name, number })
  
  person.save().then(() => {
    console.log(`Add ${name} ${number} to phonebook`)
    mongoose.connection.close();
  })
}

init()