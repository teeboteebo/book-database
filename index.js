const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to db
let dbName = 'famous_books'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  startWebServer();
});

// Import our Book mongoose model
const Book = require('./Book');

function startWebServer(){
  
  // Create a web server
  const app = express();

  // Add body-parser to our requests
  app.use(bodyParser.json());

  // A route that returns all books from Mongo
  app.get('/json/books', async (req, res) => {
    let books = await Book.find();
    res.json(books);
  });

  app.post('/json/books', async (req, res) => {
    const book = new Book(req.body);
    let saveResult = await book.save();
    res.json(saveResult);
  });

  app.get('/json/books/:id', async(req,res) => {
      let book = await Book.findOne({_id: req.params.id}).catch((err)=>{
        // Catching here to prevent server crash
        // if cast to object id for id fails
        res.json({error: err});
      });
      res.json(book !== null ? book : {error: 'No such book'});
  });

  app.delete('/json/books/:id', async (req, res) => {
    let result = await Book.findByIdAndDelete(req.params.id).catch((err) => {
      res.json({ error: err });
    });

    res.json({ result: result !== null ? "Success" : "Error" });
  });

  app.put('/json/books/:id', async (req, res) => {
    // let book = await Book.findById(req.params.id).catch((err) => {
    // res.json({ error: err });
  // });
    // Object.assign(book, req.body);
    // result = await book.save();

    let result = await Book.findByIdAndUpdate(req.params.id, req.body).catch((err) => {
      res.json({ error: err });
    });

    res.json({ result: result !== null ? "Success" : "Error" });
  });

  app.get('/json/books/author/:name', async (req, res) => {
    const regExpression = new RegExp(req.params.name, "i");

    // author: { $regex: req.params.name, $options: "i" }
    // author: regExpression

    let books = await Book.find({ author: regExpression });
    res.json(books);
  });

  app.get('/json/books/title/:partialTitle', async (req, res) => {
    const regExpression = new RegExp(req.params.partialTitle, "i");
    let books = await Book.find({ title: regExpression });
    res.json(books);
  });

  app.get('/json/books/country/:country', async (req, res) => {
    let books = await Book.find({ country: req.params.country });
    res.json(books);
  });

  app.get('/json/books/year/from/:fromYear/to/:toYear', async (req, res) => {
    const fromYear = req.params.fromYear;
    const toYear = req.params.toYear;

    let books = await Book.find({ year: { $gte: fromYear, $lte: toYear } });
    res.json(books);
  });

  app.get('/json/books/minage/:age', async (req, res) => {
    const minAge = new Date().getFullYear() - req.params.age;
    let books = await Book.find( { year: { $lte: minAge } });
    res.json(books);
  });

  // Missing "maxage age" - same as minage but "$gte" instead.
  
  // Missing "pages from-to" - same as year from-to but "pages" instead of "year"

  app.use(express.static('public'));
  
  // Start the web server
  app.listen(3000, () => console.log('Listening on port 3000'));
}