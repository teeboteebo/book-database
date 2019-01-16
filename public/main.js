// LOAD ALL BOOKS
$('.parent').on('click', '#get-books', async () => {
  let books = await getBooks();

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(`<p>Showing all the books.</p>`);

  pasteBook(books);
});

// LOAD MATCHING AUTHORS
$('.parent').on('click', '#search-author', async () => {
  let author = $('#author-query').val();
  let books = await getBooksByAuthor(author);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p>Sorry, your search for "${author}" gave no results. :(</p>` : `<p>Showing results for author: "${author}".</p>`);

  pasteBook(books);
});

// LOAD MATCHING COUNTRIES
$('.parent').on('click', '#search-country', async () => {
  let country = $('#country-query').val();
  let books = await getBooksByCountry(country);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p>Sorry, your search for "${country}" gave no results. :(</p>` : `<p>Showing results for country: "${country}".</p>`);

  pasteBook(books);
});

// LOAD MATCHING LANGUAGES
$('.parent').on('click', '#search-language', async () => {
  let language = $('#language-query').val();
  let books = await getBooksByLanguage(language);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p>Sorry, your search for "${language}" gave no results. :(</p>` : `<p>Showing results for language: "${language}".</p>`);

  pasteBook(books);
});

// LOAD MATCHING PAGES
$('.parent').on('click', '#search-pages', async () => {
  let minPages = $('#minPages-query').val();
  let maxPages = $('#maxPages-query').val();
  let books = await getBooksByPages(minPages, maxPages);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p>Sorry, your search for books with pages in between"${minPages}" and "${maxPages}" gave no results. :(</p>` : `<p>Showing results that have between: "${minPages}" and "${maxPages}" amount of pages.</p>`);
  
  pasteBook(books);
});

// LOAD MATCHING TITLES
$('.parent').on('click', '#search-title', async () => {
  let title = $('#title-query').val();
  let books = await getBooksByTitle(title);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p>Sorry, your search for "${title}" gave no results. :(</p>` : `<p>Showing results for language: "${title}".</p>`);

  pasteBook(books);
});

// LOAD MATCHING YEARS
$('.parent').on('click', '#search-year', async () => {
  let fromYear = $('#year1-query').val();
  let toYear = $('#year2-query').val();
  let books = await getBooksByYears(fromYear, toYear);

  $('.book-list').empty();
  $('.search-feedback').empty();

  $('.search-feedback').append(books.length == 0 ? `<p><p>Sorry, your search for books published between "${fromYear}" and "${toYear}" gave no results. :(</p>` : `<p>Showing results published between the years: "${fromYear}" and "${toYear}".</p>`);

  pasteBook(books);
});

// DELETE BOOK
$('.parent').on('click', '.delete', (e) => {
  let bookId = $(e.target).attr('data-id')
  deleteBook(bookId);
  $(e.target).parent().remove();
});

// ADD NEW BOOK
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

// SUBMIT THE NEW BOOK
$('.parent').on('click', '#submit-book', (async () => {
  let newBook = {
    "author": $('#author-query').val(),
    "country": $('#country-query').val(),
    "image": "missing.jpg",
    "language": $('#language-query').val(),
    "link": "https://en.wikipedia.org/wiki/Book",
    "pages": $('#pages-query').val() * 1,
    "title": $('#title-query').val(),
    "year": $('#year-query').val() * 1
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

// EDIT EXISTING BOOK
$('.parent').on('click', '.edit', async (e) => {

  let bookId = $(e.target).attr('data-id');
  let book = await getBook(bookId);
  let searchResult = $(e.target).parent();

  $(searchResult).empty();

  $(searchResult).append(
    `
      <input class="new-title" type="text" value="${book.title}">
      <img src="book-images/${book.image}">

      <p><strong>Author:</strong> </p>
      <input class="new-author" type="text" value="${book.author}">

      <p><strong>Published year:</strong></p>
      <input class="new-year" type="text" value="${book.year}">

      <p><strong>Page count:</strong></p>
      <input class="new-pageCount" type="text" value="${book.pages}">

      <p><strong>Country:</strong></p>
      <input class="new-country" type="text" value="${book.country}">

      <p><strong>Language:</strong></p>
      <input class="new-language" type="text" value="${book.language}">

      <p><strong>More information:</strong></p>
      <p><a href="${book.link}">Wikipedia</a></p>

      <button type="button" class="btn btn-secondary mt-3 cancel" data-id="${book._id}">Cancel</button>
      <button type="button" class="btn btn-success mt-3 save" data-id="${book._id}">Save</button>
    `
  );

});

// SAVE CHANGES TO BOOK
$('.parent').on('click', '.save', async (e) => {
  let bookId = $(e.target).attr('data-id');
  let searchResult = $(e.target).parent();

  let newValues = {
    "author": $('.new-author').val(),
    "country": $('.new-country').val(),
    "language": $('.new-language').val(),
    "pages": $('.new-pageCount').val() * 1,
    "title": $('.new-title').val(),
    "year": $('.new-year').val() * 1
  };

  let book = await updateBook(bookId, newValues);
  book = await getBook(bookId);

  $(searchResult).empty();

  $(searchResult).append(
    `
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
    `
  );
});

// CANCEL BOOK EDIT
$('.parent').on('click', '.cancel', async (e) => {
  let bookId = $(e.target).attr('data-id');
  let book = await getBook(bookId);
  let searchResult = $(e.target).parent();

  $(searchResult).empty();

  $(searchResult).append(
    `
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
    `
  );
});

let pasteBook = (bookData) => {
  for (let book of bookData) {
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
        <p><a target="_blank" href="${book.link}">Wikipedia</a></p>

        <button type="button" class="btn btn-primary mt-3 edit" data-id="${book._id}">Edit</button>
        <button type="button" class="btn btn-danger mt-3 delete" data-id="${book._id}">Delete</button>
      </div>
      `
    );
  };
};