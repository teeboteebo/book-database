


async function start() {
  //      Get all books
  // const books = await getBooks();
  // console.log(books);

  //      Create new book
  // let newBook = {
  //   "author": "Dennis2",
  //   "country": "Sweden2",
  //   "image": "missing.jpg",
  //   "language": "Swedish",
  //   "link": "no-link2",
  //   "pages": 1234,
  //   "title": "No title2",
  //   "year": 2018
  // };

  // newBook = await createNewBook(newBook);
  // console.log('newBook: ', newBook);
}

start();

// LOAD ALL BOOKS
$('#get-books').click(async () => {
  let books = await getBooks();

  $('.book-list').empty();

  for (let book of books) {
    $('.book-list').append('<p>' + book.title + '</p>');
    $('.book-list').append('<button data-id="' + book._id + '">Delete</button>');
  };
});


// LOAD MATCHING AUTHORS
$('#search-author').click(async () => {
  let author = $('#author-query').val();
  let books = await getBooksByAuthor(author);

  $('.book-list').empty();

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <img src="book-images/${book.image}">
        <p><strong>Title:</strong></p>
        <p>${book.title}</p>

        <p><strong>Author:</strong></p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Wiki link:</strong></p>
        <p>${book.link}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>
        
        <button type="button" class="btn btn-danger" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});

// LOAD MATCHING COUNTRIES
$('#search-country').click(async () => {
  let country = $('#country-query').val();
  let books = await getBooksByCountry(country);

  $('.book-list').empty();

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <img src="book-images/${book.image}">
        <p><strong>Title:</strong></p>
        <p>${book.title}</p>

        <p><strong>Author:</strong></p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Wiki link:</strong></p>
        <p>${book.link}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <button type="button" class="btn btn-danger" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});




$('#search-language')
$('#search-pages')
$('#search-title')
$('#search-year')
