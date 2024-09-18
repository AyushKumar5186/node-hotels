const data = req.body // Assuming the request body contains the person data

// Create a new Person document using the Mongoose model
const newPerson = new Person(data);
// newPerson.name = data.name;


// Save the new person to the database
newPerson.save((error, savedPerson) => {
  if(error){
    console.log('Error on saving person', error);
    res.status(500).json({error: 'Internal server error'})
  } else {
    console.log('data saved successfully');
    res.status(200).json(savedPerson);
  }
})