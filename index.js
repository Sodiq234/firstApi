const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = '4000';
const data = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        address: "Baltimore, Maryland USA",
        phone: "1233455567"
    },
    {
        id: 2,
        name: "Henry Fischer",
        email: "henfischer@gmail.com",
        address: "Chicago, Illinois USA",
        phone: "2340167899"
    }
];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: " Welcome to my First API",
        status: true
    });
});

app.get('/user', (req,res) =>{

    res.json({
       status: true,
       message: "All Users" ,
       data
    })
})

app.post('/user/add', (req,res) =>{

    const {name, email, address, phone} = req.body;

    if (!name || !email || !address || !phone){
        res.json({
            status: false,
            message: "All fields are required"
        })}
 
    const tempData = {
        id: data.length + 1,
        name,
        email,
        address,
        phone
    };

    data.push(tempData)

    res.json({
       status: true,
       message: "User successfully created" ,
       data: tempData
    })
})

app.put('/user/update', (req,res) =>{

    const { id, name, email, address, phone } = req.body;

    if (!name || !email || !address || !phone || email.indexOf('@') === -1){
        res.json({
            status: false,
            message: "All fields are required"
        })
    }

    const filteredData = data.filter(item => item.id === id);

    filteredData[0].name = name;
    filteredData[0].email = email;
    filteredData[0].address = address;
    filteredData[0].phone = phone;

    res.json({
        status: true,
        message: "User successfully updated" ,
        data: data
     })
})

app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
  
    // Find the index of the user with the specified userId
    const userIndex = data.findIndex(item => item.id === userId);
  
    if (userIndex === -1) {
      // User with the specified ID was not found

      res.json({
        status: false,
        message: "User not found"
    })
    } else {
      // Remove the user from the array
      data.splice(userIndex, 1);

      res.json({
        status: true,
        message: "created successfully updated" ,
        data: data
     })}
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })


  