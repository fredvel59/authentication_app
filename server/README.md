# Backend 
This a challenge from: [Dev Challenge] (https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw)

## Little description
My server communicates through **REST API** also it's created complety in javascript with Nodejs and Express as framework.

## EndPoints

## Create a new user

    http://localhost:8000/auth/signup 
    
Method: POST
    
    // body
    {
      "name": "Sergio Herrera",
      "email: "sergio.example@gmail.com",
      "photo": // if you are in javascript, you need to use FormData() to upload your file,
      "passoword: "password"
    }

## Confirm Email

    http://localhost:8000/auth/confirmemail/:user_id
    
Method: POST
    
    // body
    {
      "key": "you can get it in your email"
    }

## Register user

    http://localhost:8000/auth/login 
    
Method: POST
    
    // body
    {
      "email: "sergio.example@gmail.com",
      "passoword: "password"
    }

# Get Info for Users

## Edit user's info

    http://localhost:8000/auth/login 
    
Method: POST
    
    // body
    {
      "name": "Freddy Velarde", // this section must be greater than 8 and less than charactrs
      "phone": "+591 65623290",
      "bio": "Hi, I am a software developer" 
    }







