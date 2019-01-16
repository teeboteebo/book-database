async function start() {
  //      Get all books
  const books = await getBooks();
  console.log(books);

  //  Create new book
  let newBook = {
    "author": $('#author-query').text(),
    "country": $('#country-query').text(),
    "image": "missing.jpg",
    "language": $('#language-query').text(),
    "link": "www.google.com",
    "pages": $('#pages-query').val(),
    "title": $('#title-query').text(),
    "year": $('#year-query').val()
  };

  // newBook = await createNewBook(newBook);
  console.log('newBook: ', newBook);
}

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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
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
        <img src="/book-images/${book.image}">

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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
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

  $('.search-feedback').append(books.length==0 ? `<p>Sorry, your search for "${country}" gave no results. :(</p>` : `<p>Showing results for country: "${country}".</p>`);

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

        <button type="button" class="btn btn-primary mt-3 edit" data-id="${book._id}">Edit</button>
        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


$('#search-pages').click(async () => {
  let minPages = $('#minPages-query').val();
  let maxPages = $('#maxPages-query').val();
  let books = await getBooksByPages(minPages, maxPages);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results that have between: "${minPages}" and "${maxPages}" amount of pages.</p>`);

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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});


$('#search-year').click(async () => {
  let fromYear = $('#year1-query').val();
  let toYear = $('#year2-query').val();
  let books = await getBooksByYears(fromYear, toYear);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing results published between the year: "${fromYear}" and "${toYear}".</p>`);

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

        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
});

$('.parent').on('click', '.delete', (e) => {
  let bookId = $(e.target).attr('data-id')
  deleteBook(bookId);
  $(e.target).parent().remove();

});

$('#add-book').click(async () => {
  $('.filter-container').empty();
  $('.filter-container').append(
    `
      <div class="col-6 text-center">
        <p>Author</p>
        <div class="input-group mb-3">
          <input id="author-query" type="text" class="form-control" placeholder="Author" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
        <p>Country</p>
        <div class="input-group mb-3">
          <input id="country-query" type="text" class="form-control" placeholder="Country" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
        <p>Language</p>
        <div class="input-group mb-3">
          <input id="language-query" type="text" class="form-control" placeholder="Language" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
      </div>
      <div class="col-6 text-center">
        <p>Pages</p>
        <div class="input-group mb-3">
          <input id="pages-query" type="number" class="form-control" placeholder="Number of pages" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
        <p>Title</p>
        <div class="input-group mb-3">
          <input id="title-query" type="text" class="form-control" placeholder="Title" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
        <p>Year</p>
        <div class="input-group mb-3">
          <input id="year-query" type="number" class="form-control" placeholder="Year" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        </div>
      </div>

      <div class="col-12 text-center mt-3">
        <button id="submit-book" type="button" class="btn btn-success">Submit book</button>
      </div>
    `

  );
});




$('.parent').on('click', '#submit-book', (async () => {
  let newBook = {
    "author": $('#author-query').val(),
    "country": $('#country-query').val(),
    "image": "missing.jpg",
    "language": $('#language-query').val(),
    "link": "https://en.wikipedia.org/wiki/Book",
    "pages": $('#pages-query').val()*1,
    "title": $('#title-query').val(),
    "year": $('#year-query').val()*1
  };

  newBook = await createNewBook(newBook);
  console.log('newBook: ', newBook);
  
  $('.filter-container').empty();

  $('.filter-container').append(`
    <div class="col-6 text-center">
      <p>Author</p>
      <div class="input-group mb-3">
        <input id="author-query" type="text" class="form-control" placeholder="Author" aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <div class="input-group-append">
          <button id="search-author" class="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
      <p>Country</p>
      <div class="input-group mb-3">
        <input id="country-query" type="text" class="form-control" placeholder="Country" aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <div class="input-group-append">
          <button id="search-country" class="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
      <p>Language</p>
      <div class="input-group mb-3">
        <input id="language-query" type="text" class="form-control" placeholder="Language" aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <div class="input-group-append">
          <button id="search-language" class="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
    </div>
    <div class="col-6 text-center">
      <!--Pages-->
      <div class="row">
        <div class="col-12">
          <p>Pages</p>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input id="minPages-query" type="text" class="form-control" placeholder="From" aria-label="Recipient's username"
              aria-describedby="button-addon2">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input id="maxPages-query" type="text" class="form-control" placeholder="To" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <div class="input-group-append">
              <button id="search-pages" class="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
      <p>Title</p>
      <div class="input-group mb-3">
        <input id="title-query" type="text" class="form-control" placeholder="Title" aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <div class="input-group-append">
          <button id="search-title" class="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
      <!--Year-->
      <div class="row">
        <div class="col-12">
          <p>Year</p>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input id="year1-query" type="text" class="form-control" placeholder="From" aria-label="Recipient's username"
              aria-describedby="button-addon2">
          </div>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <input id="year2-query" type="text" class="form-control" placeholder="To" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <div class="input-group-append">
              <button id="search-year" class="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}));