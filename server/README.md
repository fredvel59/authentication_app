# Documentation about the REST API

## Little description
My server communicates through **REST API** also it's created complety in javascript with Nodejs and Express as framework.

Made by Freddy Velarde:
  [LinkedIn](https://www.linkedin.com/in/fevs/)
  [Facebook](https://www.facebook.com/freddy.velarde.969/)
  [Portfolio](https://freddyvelarde.netlify.app/)
  Email: fred.vel.dev59@gmail.com

## SignUp and LogIn

## Create a new user

These examples were made only for **Javascript developers**

    http://localhost:8000/auth/signup 
    
Method: POST
    
``` javascript    
{
  // code for javascript developers
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data' // use FormData()        
  },
  body: JSON.stringify({
    name: "Sergio Herrera",
    email: "sergio.example@gmail.com",
    photo: 'if you are in javascript, you need to use FormData() to upload your file',
    passoword: "password" // password must be greater than 6 characters
  }),
}

```
## Confirm Email

    http://localhost:8000/auth/verifyEmail
    
Method: GET

``` javascript
// you only need click the link sent to your email
``` 

## Register user

    http://localhost:8000/auth/login 
    
Method: POST
``` javascript    
// code for javascript developers
{
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },  
  body: JSON.stringify({
    email: "sergio.example@gmail.com",
    passoword: "password" // password must be greater than 6 characters
  }) // this code will give you an access-token 
}
```

# Get Info for Users

## Edit user's info

    http://localhost:8000/users/edit
    
Method: POST

``` javascript    
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'access-token': // your token        
  },
  body: JSON.stringify({
    name: "Freddy Velarde", // this section must be greater than 8 and less than 50       charactrs
    phone: "+591 65623290",
    bio: "Hi, I am a software developer" 
  })
}
```

## Edit user's photo

    http://localhost:8000/users/photo
    
Method: POST

``` javascript    
{ 
  method: 'POST',
  headers: {
    'Content-type': 'multipart/form-data',
    'access-token': // your token
  }, 
  body: JSON.stringify({
    photo: your file // you again need to use FormData() in javascript only 
  })
}
```

## Get it back Password 

    http://localhost:8000/users/newPassd
    
Method: GET

``` javascript
{
  method: 'GET',
  headers: {
    'access-token': // your token
  }
}    
```

## Change Password

    http://localhost:8000/users/changepasswd
    
Method: POST

``` javascript    
{  
  method: 'POST',
  headers: {
    'Content-type': 'multipart/form-data',
    'access-token': 'your token'
  }, 
  body: JSON.stringify({
    password: "your last password",
    newPassword: "your naw password",
    repeatePassword: "repeate your new password"
    })
  }
}
```

## Get All Users

    http://localhost:8000/users/all

METHOD: GET  and you need access token

``` javascript
{
  method: "GET",
  headers: {
    "access-token": // your token
  }
}
```


## Get user by id 

    http://localhost:8000/users/info

METHOD: GET  and you need access token

``` javascript
{
  method: "GET",
  headers: {
    "access-token": // your token
  }
}
```

## Remove user

    http://localhost:8000/users/remove

METHOD: POST  and you need access token

``` javascript
{
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'access-token': // your token
  },
  body: JSON.stringify({
    password: 'your password' // you need your current password to remove your account
  }),
}
```


