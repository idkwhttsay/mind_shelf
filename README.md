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
  "email": "String"
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
      "email": "String",
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
    "email": "String"
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
    "email": "String",
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
    "email": "String",
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
    "email": "String",
    "_id": "String",
    "createdAt": "Date",
    "updatedAt": "Date"
}
```

### getAllBooks [POST]
Route: “/book/getAll”

Description: Get all book for the specified email

#### Input format JSON:
```json
{
  "email": "String"
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
    "email": "String",
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



