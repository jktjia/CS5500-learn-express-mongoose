let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {
  return BookInstance.find({ status: {$eq: 'Available'}})
  .populate('book')
  .then((books) => {
    res.send(books.map((b) => {
      return b.book.title + ' : ' + b.status;
    }));
  });
}