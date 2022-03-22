# Backend 
This a challenge from: [Dev Challenge] (https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw)

## Little description
My server communicates through **REST API** also it's created complety in javascript with Nodejs and Express as framework.

## EndPoints

    http://localhost:8000/auth/signup 
    
Method: POST
    
    // body
    {
      "name": "Sergio Herrera",
      "email: "sergio.example@gmail.com",
      "photo": // if you are in javascript, you need to use FormData() to upload your file,
      "passoword: "password"
    }
