


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
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing all the books.</p>`);

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <h4>${book.title}</h4>
        <img src="book-images/${book.image}">

        <p><strong>Author:</strong> </p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <p><strong>More information:</strong></p>
        <p><a href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-danger mt-3" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


// LOAD MATCHING AUTHORS
$('#search-author').click(async () => {
  let author = $('#author-query').val();
  let books = await getBooksByAuthor(author);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results for author: "${author}".</p>`);

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <h4>${book.title}</h4>
        <img src="book-images/${book.image}">

        <p><strong>Author:</strong> </p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <p><strong>More information:</strong></p>
        <p><a href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-danger mt-3" data-id="${book._id}">Delete</button>
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
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results for country: "${country}".</p>`);

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <h4>${book.title}</h4>
        <img src="book-images/${book.image}">

        <p><strong>Author:</strong> </p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <p><strong>More information:</strong></p>
        <p><a href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-danger mt-3" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});

$('#search-language').click(async () => {
  let language = $('#language-query').val();
  let books = await getBooksByLanguage(language);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results for language: "${language}".</p>`);

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <h4>${book.title}</h4>
        <img src="book-images/${book.image}">

        <p><strong>Author:</strong> </p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <p><strong>More information:</strong></p>
        <p><a href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-danger mt-3" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


$('#search-pages')


$('#search-title').click(async () => {
  let title = $('#title-query').val();
  let books = await getBooksByTitle(title);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results for title: "${title}".</p>`);

  for (let book of books) {
    $('.book-list').append(
      `
      <div class="search-result p-3">
        <h4>${book.title}</h4>
        <img src="book-images/${book.image}">

        <p><strong>Author:</strong> </p>
        <p>${book.author}</p>

        <p><strong>Published year:</strong></p>
        <p>${book.year}</p>

        <p><strong>Page count:</strong></p>
        <p>${book.pages}</p>

        <p><strong>Country:</strong></p>
        <p>${book.country}</p>

        <p><strong>Language:</strong></p>
        <p>${book.language}</p>

        <p><strong>More information:</strong></p>
        <p><a href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-danger mt-3" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


$('#search-year')
