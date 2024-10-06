const { SaveBook, GetAllBooks, GetBookById, UpdateBook, DeleteBook } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: SaveBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: GetAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: GetBookById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: UpdateBook,
    },
    {
        method:'DELETE',
        path: '/books/{bookId}',
        handler: DeleteBook,
    },
];

module.exports = routes