const http = require('node:http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

  if (req.url === '/login' && req.method === 'POST'){

    console.log(req.body)
    const emailData = req.body.email
    const passwordData = req.body.password

    const responseFromLogin = login(emailData, passwordData)
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
      message: responseFromLogin
    }))
    res.end();
  };
  
});

server.listen(port, hostname , () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const login = (email,password) =>{

  if (!email || !password){

    return "Please provide email and password"
  }
return "You are logged in"
}

const signup = ()=>{

return "You are signed up"

}

const logout = ()=>{

  return "You are logged up"
  
  }
//----------------------------------------------
// const serveData = require('node:http');
// // const dataFile = require('./logs.js')
// // const { getAge } = require('./logs.js'); 


// const hostname = 'localhost';
// const port = 3000;

// const server = serveData.createServer((req,res) =>{

//     res.json({
//         message:'Hello World!',
//         us: "We are learning Node.js"
//     });
// });

// server.listen(port,hostname,()=>{

//     console.log('server running at ${hostname} : ${port}');

// })

// console.log('how far')
// dataFile.fullname()
// dataFile.getAge()
 // console.log("how far")

// const http = require('node:http');
// const PORT = '3000'
// const HOST = 'localhost'

// const server = http.createServer((req, res) => {
//       res.setHeader("Content-Type", "application/json");
//       res.write(JSON.stringify({
//         message: "You are live Bro!"
//       }));
//       res.end()

// })

// server.listen((HOST, PORT), () => {
//     console.log(`Server is running now on http://${HOST}:${PORT}`)
// })