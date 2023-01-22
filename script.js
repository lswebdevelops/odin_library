//button event listeners for create new book, add new book to page, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

//Book Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value + ' pg'; 
        this.read = form.read.checked; 
    }
}

//creates book from Book Constructor, adds to library

let myLibrary = [];
let newBook;

function addBookToLibrary(){
    event.preventDefault();

    if (form.title.value===""){
        alert('Please enter a title for the book');
        return;
    }
    if (form.author.value===""){
        alert('Please enter an author for the book');
        return;
    }
    if (form.pages.value==="" || form.pages.value <= 0){
        alert('Please enter the number of pages for the book');
        return;
    }
    popUpForm.style.display= "none";
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
    form.reset();
}

//creates a visual book
function render(){
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

// creates book DOM elements for rendering

function createBook(item) {
    const library = document.querySelector('#Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false){
        readBtn.textContent = 'Not read';
        readBtn.style.backgroundColor = 'hsl(0deg 100% 81%)';
    }else{
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = 'hsl(118deg 100% 81%)' ;
    }
		

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
      //  setData()
        render();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
   //     setData(); 
        render();
    }); 
};