let myLibrary = [];


function Book(title, author, pages, read, unread){
      
    this.title = title
    this.autor = author
    this.pages = pages
    this.read = read  
    this.unread = unread  

}


function addBookToLibrary(){

    this.addBooks = function(books){
        this.books.push(books)
    }
}
 // new book object
 let book = new Book();

// adding book's info to html>div

function addToHtml(){
    for(let i = 0; i <book.books.length; i++){
        // where it will be added to > the container
        let newBook = document.querySelector(".container");
        // creating div inside the container:
        const content = document.createElement('div');
        content.classList.add('content');
        containerDiv.appendChild(content);
        // creating the item in the content div
        let title = document.createElement('p');
        let author =document.createElement('p');
        let pages =document.createElement('p');
        let read =document.createElement('button');
        let unread = document.createElement('button');
        // taking the values from the array
        let book_title = book.books[i].title;
        let book_author = book.books[i].author;
        let book_pages = book.books[i].pages;
        let book_read = book.books[i].read;
        let book_unread = book.books[i].unread;
        // adding text to the items just created
        title.textContent=book_title;
        title.textContent=book_author;
        title.textContent=book_pages;
        title.textContent=book_read;
        title.textContent=book_unread;
        //appending the children to .content
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        newBook.appendChild(unread);

    }
}
//adding book button
let addingBookButton = document.getElementById('addBtn');
addingBookButton.addEventListener('click' , function getTarget(e){
    e.preventDefault()
    // getting input from user
    let jsTitleInput = document.getElementById('titleInput').value;
    let jsAuthorInput = document.getElementById('authorInput').value;
    let jsPagesInput = document.getElementById('pagesInput').value;
    let jsReadInput = document.getElementById('readInput').value;
    // let jsNotReadInput = document.getElementById('unreadInput').value;

    let newBookf = new Book(jsTitleInput, jsAuthorInput,jsPagesInput, jsReadInput);
    book.addBooks(newBookf);
    addToHtml();
})





// // creating div under .container:
// const addBook = document.querySelector('#addBtn');
// addBook.addEventListener("click", addBookToLibrary2);

// function addBookToLibrary2(){
   
// // adding a container div for the content of the books added
// const containerDiv = document.querySelector('.container');
// const content = document.createElement('div');
// content.classList.add('content');
// containerDiv.appendChild(content);

// // adding  title of the book 
// const bookTitle = document.createElement("p");
// bookTitle.classList.add('bookTitle');
// bookTitle.textContent ='"The Hobbit 2"'
// content.appendChild(bookTitle);
// // adding  autor 
// const bookAuthor = document.createElement('p')
// bookAuthor.classList.add("bookAuthor")
// bookAuthor.textContent ="The Hobbit's writer"
// content.appendChild(bookAuthor);
// // adding pages
// const bookPages = document.createElement('p')
// bookPages.classList.add("bookPages")
// bookPages.textContent ="333 pages"
// content.appendChild(bookPages);
// // adding button 'read'
// const bookRead = document.createElement('button')
// bookRead.classList.add("bookRead")
// bookRead.textContent ="Read"
// content.appendChild(bookRead);

// // adding button 'not read'
// const bookUnRead = document.createElement('button')
// bookUnRead.classList.add("bookUnRead")
// bookUnRead.textContent ="Not read"
// content.appendChild(bookUnRead);


// // adding button 'remove'
// const bookDelete = document.createElement('button')
// bookDelete.classList.add("bookDelete")
// bookDelete.textContent ="Delete"
// content.appendChild(bookDelete);
// };

