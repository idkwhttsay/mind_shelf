# Mind Shelf API Documentation

## Book Model
### addBook [POST]

Route: “/book/”

Description: Creates book with specified fields

####  Input format JSON:
```json
{
  "bookName": "String",
  "pageNumber": "Number",
  "userId": "String"
}
```

#### Output format JSON:

OK 200
```json
{
      "bookName": "String",
      "description": "String",
      "pageNumber": "Number",
      "imageUrl": "String",
      "userId": "String",
      "_id": "String",
      "createdAt": "Date",
      "updatedAt": "Date"
}
```

Bad Request 400
```json
{
    "message": "error"
}
```

### updateBookById [PUT]
Route: “/book/:id”

Description: Updates all book properties with specified book id
#### Input format JSON:
params: "id": String

```json
{
    "name": "String",
    "pageNumber": "Number",
    "userId": "String"
}
```

#### Output format JSON:

404 Not Found
```json
{
  "message": "Book not found"
}
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

OK 200
```json
{
    "name": "String",
    "description": "String",
    "imageUrl": "String",
    "pageNumber": "Number",
    "userId": "String",
    "_id": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### deleteBookById [DEL]
Route: “/book/:id”

Description: Deletes book with specified book id

#### Input format JSON:

params: “id”: “string”

Output format JSON:

404 Not Found
```json
{
  "message": "Book not found"
}
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

OK 200
```json 
{
    "name": "String",
    "description": "String",
    "pageNumber": "Number",
    "userId": "String",
    "_id": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### getBookById [GET]
Route: “/book/:id”

Description: Gets book with specified id
#### Input format JSON:
params: “id”: “string”

#### Output format JSON:
404 Not Found
```json
{
  "message": "Book not found"
}
```

Bad Request 400
```json
{
"message": "Error message"
}
```

OK 200
```json
{
    "name": "String",
    "description": "String",
    "pageNumber": "Number",
    "userId": "String",
    "_id": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### getAllBooks [GET]
Route: “/book/”

Description: Get all book for the specified UserId

#### Input format JSON:
```json
{
  "userId": "String"
}
```


#### Output format JSON:
OK 200
```json
[
  {
    "name": "String",
    "description": "String",
    "pageNumber": "Number",
    "userId": "String",
    "_id": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
]
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

## User Model
### registerUser [POST]
Route: “/user/register”

Description: Registers user with email and password
#### Input format JSON:
```json
{
    "email": "String",
    "password": "String"
}
```

#### Output format JSON:
OK 200
```json
{
  "email": "String",
  "password": "String",
  "_id": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

User Already Exists 401
```json
{
  "message": "User already exists"
}
```

### loginUser [POST]
Route: “/user/login”

Description: Login user with email and password
#### Input format JSON:
```json
{
    "email": "String",
    "password": "String"
}
```

#### Output format JSON:
OK 200
```json
{
  "email": "String",
  "password": "String",
  "_id": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

User Already Exists 404
```json
{
  "message": "Wrong email or password"
}
```

### getAllUsers [GET]
Route: “/user/”

Description: Adds user to the database
#### Input format JSON: No Input
#### Output format JSON:
OK 200
```json
[
    {
        "email": "String",
        "userId": "String",
        "createdAt": "Date",
        "updatedAt": "Date"
    }
]
```

Bad Request 400
```json
{
    "message": "Error message"
}
```

### getUserById [GET]
Route: “/user/:id”

Description: Get specific user with userId
#### Input format JSON:
params: “id”: “string”
#### Output format JSON:
OK 200
```json
{
    "email": "String",
    "userId": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

Bad Request 400
```json
{
  "message": "Error message"
}
```

Not Found 404
```json
{
  "message": "User not found"
}
```



