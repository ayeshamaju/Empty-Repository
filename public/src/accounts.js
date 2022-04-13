function findAccountById(accounts, id) {
  //   for (i =0; i < accounts.length; i++) {
  //     let account = accounts[i];
  //     if (account.id === id) return account;
  //   }
    return accounts.find(account => account.id === id)
    // "find" method returns the first match item of an array
  }
  
  function sortAccountsByLastName(accounts) {
    const sortedNames = accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1 ); 
    return sortedNames;
  }
  
  function getTotalNumberOfBorrows(account, books) {
  // we have to check id with borrow.id, if it evaluates to true, then will increase the total by 1
     let total = 0;
     let { id } = account;
     books.forEach((book) => { book.borrows.forEach((borrow) => { 
       if (id === borrow.id) { 
         total++; 
       }}); 
    }); 
    return total;
  }
  
  
  function getBooksPossessedByAccount(account, books, authors) { 
    let checkedOut = []; 
    books.forEach(book => { 
      if (book.borrows.find(item => item.id === account.id && !item.returned))                checkedOut.push(book); 
    }) 
    checkedOut.forEach(book => { 
      let theAuthor = authors.find(person => person.id === book.authorId); book['author'] = theAuthor; }) 
    return checkedOut; 
  }
  
  // function getBooksPossessedByAccount(account, books, authors) {
  //   const borrowed = books.filter((book) => 
  //       book.borrows.some(borrow => 
  //        !borrow.returned && borrow.id === account.id));
  //    borrowed.forEach(book => book.author = authors.find(author => book.authorId == author.id));
  //   return borrowed;
  // }
  // -------------------------------------------
  // function getBooksPossessedByAccount(account, books, authors) {
  //   //Initialze a return array
  //   let booksPossessed=[];
  //   //check for the account id in the borrows arrays
  //   books.forEach(book => {
  //     let borrowArray = book.borrows;
  //     if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
  //       booksPossessed.push(book);
  //     }
  //   })
    
  //   booksPossessed.forEach(book=>{
  //     let author = authors.find(person => person.id === book.authorId);
  //     book['author'] = author;
  //   })
  //   console.log(booksPossessed);
  //   return booksPossessed;
    
  // }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  