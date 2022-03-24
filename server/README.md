# Backend 
<!-- This a challenge from: [Dev Challenge] (https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw) -->

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
      "passoword: "password" // password must be greater than 6 characters
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
      "email": "sergio.example@gmail.com",
      "password": "password"
    }

# Get Info for Users

## Edit user's info

    http://localhost:8000/users/edit/:id
    
Method: POST
    
    // body
    body: JSON.stringify({
      "name": "Freddy Velarde", // this section must be greater than 8 and less than 50 charactrs
      "phone": "+591 65623290",
      "bio": "Hi, I am a software developer" 
    })
    

## Edit user's photo

    http://localhost:8000/users/photo/:id
    
Method: POST
    
    // body
    {
      photo: your file // you again need to use FormData() in javascript only 
    }

## Get it back Password 

    http://localhost:8000/users/newPassd/:id
    
Method: GET

## Change Password

    http://localhost:8000/users/changepasswd/:id
    
Method: POST
    
    // body
    {
      "password": "your last password",
      "newPassword": "your naw password",
      "repeatePassword": "repeate your new password"
    }

## Get All Users

    http://localhost:8000/users/all

METHOD: GET  and you need access token

    {
      method: "GET",
      headers: {
        "access-token": // your token
      }
    }

## Get user by id 

    http://localhost:8000/users/all

METHOD: GET  and you need access token

    {
      method: "GET",
      headers: {
        "access-token": // your token
      }
    }

