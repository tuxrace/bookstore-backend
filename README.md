# Bookstore Backend

# To Run

```
docker run --name mongo-server -p 27017:27017 -d mongo
docker run --name redis-server -p 6379:6379 -d redis
npm install
npm run seed
npm start
Open in postman http://localhost:3000
```

# Add a book
Endpoint
```
POST http://localhost:3000/books
```
Payload
```javascript
{
  bookId: 5
  title: 'The Hobbit',
  ISBN: 34253,
  author: 'J.R.R. Tolkien',
  genre: 'adventure'
}
```

# Find a book
Endpoint
```
POST http://localhost:3000/find
```
Payload
```javascript
{  
  title: 'Hamlet' 
}
```
or 
```javascript
{  
  genre: 'classic' 
}
```
