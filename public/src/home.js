function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 return books.reduce((acc,book) => {
   return book.borrows.filter(borrow => !borrow.returned).length + acc
  },0)
}
           
// function getBooksBorrowedCount(books) {  
//    let total = 0;
//   for (let i = 0; i < books.length; i++) {
//     for (let j = 0; j < books[i].borrows.length; j++) {
//       if (books[i].borrows[j].returned === false) total++;
//     }
//   }
//   return total;
// }

function getMostCommonGenres(books) {
  let result = [];
  const name = books.forEach((book) => { 
    let genreExists = result.find((genre) => genre.name === book.genre);
    if (!genreExists) { 
    // push the name and count into new array 
    result.push({ name: book.genre, count: 1 }); 
    } else { 
    genreExists.count += 1; 
    }
  });
  
  return result.sort((a,b) => b.count - a.count).slice(0, 5);
}

function getMostPopularBooks(books, count=5) {
    // organise book data
    const borrows = books.map(book=>({
      name:book.title, count:book.borrows.length}));
    // sort by borrow count, descending
    borrows.sort((a,b) => b.count - a.count);
    // return top N
    return borrows.slice(0,count);
}

function getMostPopularAuthors(books, authors, count = 5) {
  return authors.map(a => {
    // loop through the author array
    a.count = books.filter(b => 
      b.authorId === a.id).reduce((b, a) => 
      b + (a.borrows && a.borrows.length || 0), 0);
    // to get the count, filter the book array and then reduce it to a sum of all matching books borrows array length
    a.name = `${a.name.first} ${a.name.last}`;
    delete a.id
    // remove the id since that isn't part of the desired result
    return a
  }).sort((a, b) => b.count - a.count).slice(0, count)
  // sort the end result to be biggest counts first, then slice the array down to the desired length
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
