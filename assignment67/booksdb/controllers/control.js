import books from '../databases/books.js'

const getDetails = (req,res) => {
    res.status(200).send(`
      On our website, you will find nearly 100 different types of books along with other information related to them. The way to search for them is given below.

      The routes are as follows:
        

        1. search book by filter : get, localhost/api/filter?scope=value : [book_name,author_name,publication,genre,origin_country]
        
        2. random book : get, localhost/api/books/random

        3.  all books : get ,localhost/api/books/all
        
        4. search book by id : get ,localhost/api/books/id/

        

        `)
}

const byFilter = (req, res) => {
  try {
    let { book_name, author_name, publication, genre, origin_country } = req.query; 
    let booksArray = books;

  

    if (!book_name && !author_name && !publication && !genre && !origin_country) {
      throw ('At least one query param required');
    }

    if (book_name) {
      booksArray = booksArray.filter((book) =>
        book.book_name.toLowerCase() === book_name.toLowerCase().trim()
      );
    }

    if (author_name) {
      booksArray = booksArray.filter((book) =>
        book.author_name.toLowerCase() === author_name.toLowerCase().trim()
      );
    }

    if (publication) {
      booksArray = booksArray.filter((book) =>
        book.publication.toLowerCase() === publication.toLowerCase().trim()
      );
    }

    if (genre) {
      booksArray = booksArray.filter((book) =>
        book.genre.toLowerCase() === genre.toLowerCase().trim()
      );
    }

    if (origin_country) {
      booksArray = booksArray.filter((book) =>
        book.origin_country.toLowerCase() === origin_country.toLowerCase().trim()
      );
    }

    if (booksArray.length === 0) throw 'No books found for given filter(s)';

    res.status(200).json({
      message: 'Information fetched according to request',
      total_results: booksArray.length,
      results: booksArray
    });

  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: 'Unable to get the data',
      error: err
    });
  }
};



const randomBook = (req,res) => {
    let randomNum = Math.floor((Math.random()*50)+1)
    let result = books.filter(
        (book) => {
            return book._id === randomNum
        }
    )
    res.status(200).json({
        Message : 'Random book that you are requesting for is', result
    })
}

const allBooks = (req,res) => {
    res.status(200).json({message: 'All the books within the dataset are : ', books})
}

const searchBookById = (req,res) => {
    try{
        let {id} = req.params
        if (!id) throw ('Id does not exists');
        let result = books.filter((books) => {
            return books._id ==id
        })
        if(result.length == 0) throw ('UNABLE TO FIND THE BOOK')
        res.status(200).json({
    message: `We have ${id} having the result`, result : result[0]
    })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message : `Unable to get data based on id`,error : err
        })
    }
}

const addBooks = (req, res) => {
  try {
    let { book_name, author_name, publication, genre, origin_country, total_pages, date_of_release } = req.body;
    
    if (!book_name || !author_name) throw ("Book name and author name are required");

    let newBook = {
      _id: books.length + 1, // Assign new ID
      book_name,
      author_name,
      publication: publication || "Unknown", // Default if not provided
      genre: genre || "Unknown",
      origin_country: origin_country || "Unknown",
      total_pages: total_pages || 0,
      date_of_release: date_of_release || "Unknown"
    };

    books.push(newBook);

    res.status(202).json({
      message: `New book ${newBook.book_name} added successfully!`,
      book: newBook // Optional: return the added book
    });
  } catch (err) {
    console.log('Error while adding a new book:', err);
    res.status(400).json({
      message: 'Unable to add new book',
      error: err
    });
  }
}

const deleteBooks = (req, res) => {
  try {
    let { id } = req.params;

    if (!id || isNaN(id)) throw ('Invalid or missing ID');
    let index = books.findIndex(book => book._id == id);

    if (index === -1) throw (`Book with id ${id} not found`);
    let deleted = books.splice(index, 1);

    res.status(200).json({
      message: `Book with id ${id} deleted successfully`,
      deleted: deleted[0]
    });
  } catch (err) {
    console.log('Error while deleting book:', err);
    res.status(400).json({
      message: 'Unable to delete book',
      error: err
    });
  }
}




export {getDetails, byFilter, randomBook, allBooks, searchBookById, addBooks, deleteBooks}