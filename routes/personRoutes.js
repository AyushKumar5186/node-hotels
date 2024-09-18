const express = require('express');
const router = express.Router();

const Person = require('./../models/person');

router.post('/', async (req, res) => {

  try{

// Assuming the request body contains the person data
    const data = req.body 

// Create a new Person document using the Mongoose model
    const newPerson = new Person(data);
    // newPerson.name = data.name;
  
  
// Save the new person to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    
  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    
  }
})


router.get("/", async (req, res) => {
try {
  const data = await Person.find();
  console.log('data fetched');
  res.status(200).json(data);
} catch (err) {
  console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
}
})

router.get('/:workType', async (req, res)=>{

  try {
    
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({error: 'Invalid WorkType'});

    }
  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

router.put('/:id', async (req, res) => {

  try {
    const personId = req.params.id; 
    // Extract the id from the URL parameter
    const updateVersionData = req.body;
    // Update data for the person

    const response = await Person.findByIdAndUpdate(personId, updateVersionData, {
      new: true, // Returns the updated document
      runValidators: true, // Run mongoose Validation
    });

    if (!response) {
      return res.status(404).json({error: 'Person not found'})
    }
    console.log('data updated');
    res.status(200).json(response);
    

  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})

router.delete('/:id', async (req, res) => {

  try {
    const personId = req.params.id; 
    // Extract the id from the URL parameter

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({error: 'Person not found'})
    }
    console.log('data Deleted');
    res.status(200).json({message: 'Person Deleted Successfully'});
    

  } catch (err) {
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  }
})
// for testing purpose
module.exports = router;