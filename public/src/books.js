function findAuthorById(authors, id) {
  //   for (let i =0; i < authors.length; i++) {
  //     const author = authors[i];
  //     if (author.id === id) return author;
  //   }
    return authors.find(author => author.id === id)
  }
  
  function findBookById(books, id) {
  //   for (let i = 0; i < books.length; i++) {
  //     const book = books[i];
  //     if (book.id === id) return book;
  //   }
    return books.find(book => book.id === id)
  }
  
  function partitionBooksByBorrowedStatus(books) {
    let result1 = books.filter(book => book.borrows[0].returned === false);
    let result2 = books.filter(book => book.borrows[0].returned === true);
      return [result1, result2];
  }
  
  function getBorrowersForBook(book, accounts) {
    return book.borrows.map(borrow => {
      const account = accounts.find(account => account.id === borrow.id)
      account.returned = borrow.returned
      return account
    }).slice(0, 10)
  }
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };
  
  