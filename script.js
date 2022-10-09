let myLibrary = [];


function Books(title, autor,  pages, read){
      
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = read
    this.printInfo = function(){
        console.log(`${title} by ${autor}, ${pages} page. Is it read?: ${read}.`)
    }
    this.info = function(){
       return `${title} by ${autor}, ${pages} page. Is it read?: ${read}.`
    }
    
}

// const theHobbit = new Books("The Hobbit", "who actually wrote it", "probably more than one",true);
// const book2 = new Books("The Boss", "who actually wrote it", "probably more than one",false);
// const book3 = new Books("The Boys", "who actually wrote it", "probably more than one",false);

// console.log(theHobbit.info());
// book2.printInfo();
// book3.printInfo();




// creating div under .container:
const addBook = document.querySelector('#addBtn');
addBook.addEventListener("click", addBookToLibrary);
function addBookToLibrary(){
   
// adding a container div for the content of the books added
const containerDiv = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('content');
containerDiv.appendChild(content);

// adding the title of the book 
const bookTitle = document.createElement("p");
bookTitle.classList.add('bookTitle');
bookTitle.textContent ='"The Hobbit 2"'
content.appendChild(bookTitle);
// adding the autor 
const bookAuthor = document.createElement('p')
bookAuthor.classList.add("bookAuthor")
bookAuthor.textContent ="The Hobbit's writer"
content.appendChild(bookAuthor);

// adding the pages
const bookPages = document.createElement('p')
bookPages.classList.add("bookPages")
bookPages.textContent ="333 pages"
content.appendChild(bookPages);
// adding button 'read/not read'
const bookRead = document.createElement('button')
bookRead.classList.add("bookRead")
bookRead.textContent ="Read"
content.appendChild(bookRead);

const bookUnRead = document.createElement('button')
bookUnRead.classList.add("bookUnRead")
bookUnRead.textContent ="Not read"
content.appendChild(bookUnRead);


// adding button 'remove'
const bookDelete = document.createElement('button')
bookDelete.classList.add("bookDelete")
bookDelete.textContent ="Delete"
content.appendChild(bookDelete);
};

