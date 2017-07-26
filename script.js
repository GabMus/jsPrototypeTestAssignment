"use strict";
// your code here for the Book() constructor
//
//

var booksdb = [ // no books list source provided, using an arbitrary books json db
    {
        'name' : 'The Lightning Thief',
        'author' : 'Rick Riordan',
        'genre' : 'fantasy',
        'published' : '2005'
    },
    {
        'name' : 'The Sea of Monsters',
        'author' : 'Rick Riordan',
        'genre' : 'fantasy',
        'published' : '2006'
    },
    {
        'name' : 'Sophie\'s World : The Greek Philosophers',
        'author' : 'Jostein Gaarder',
        'genre' : 'fantasy',
        'published' : '2005'
    },
    {
        'name' : 'The Woodlanders',
        'author' : 'Thomas Hardy',
        'genre' : 'novel',
        'published' : '1887'
    },
    {
        'name' : 'Once Gone',
        'author' : 'Blake Pierce',
        'genre' : 'mystery',
        'published' : '2015'
    },
    {
        'name' : 'C.S. Lewis: A Life Inspired',
        'author' : 'Christopher Gordon',
        'genre' : 'biography',
        'published' : '2014'
    }
]



function Book(genre, title, author, published) {
    this.genre = genre;
    this.title = title;
    this.author = author;
    this.published = published;
}

Book.prototype.hasMovie = function() {
    return false; // what do?
}

Book.prototype.display = function() {
    console.log(this);
}

Book.prototype.toString = function() {
    return `"${this.title}", a ${this.genre} book by ${this.author} published in ${this.published}`;
}

function makeBooksList(list) {
    let n_bookslist = [];
    list.map((item) => {
        n_bookslist.push(new Book(
            item.genre,
            item.name, // =title
            item.author,
            item.published
        ));
    });
    return n_bookslist
}

window.onload = function () {
    var books = makeBooksList(booksdb);
    books.map((item) => {
        addToPage(item);
    });
    // your code here to create the books and call addToPage()
};

function addToPage(book) {
    var booksList = document.getElementById("books");
    var bookItem = document.createElement("li");
    // your code here to figure out how which class to add to the book
    bookItem.setAttribute("class", book.genre);
    bookItem.innerHTML = book.toString();
    booksList.appendChild(bookItem);
}
