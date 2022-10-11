function Book(title, author, pages, read){
      
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read  
   

}



function addBookToLibrary(){
    this.books =[];
    this.addBooks = function(books){
        // deletes the last properties added to the array books.
        this.books.pop();
        // adds the newest properties added from the user
        this.books.push(books)
    }
   
}
 // new book object
 let book = new addBookToLibrary();

// adding book's info to html>div

function addToHtml(){

    //  
     
// remove button


    // where it will be added to > the container
    let containerDiv = document.querySelector(".container");
    // creating div inside the container:
    const content = document.createElement('div');
    content.classList.add('content');
    
    for(let i = 0; i <book.books.length; i++){
        containerDiv.appendChild(content);
        // creating the item in the content div
        let title = document.createElement('p');
        let author =document.createElement('p');
        let pages =document.createElement('p');
        let read =document.createElement('button');
        //adding delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent= "Delete";
        deleteBtn.classList.add("bookDelete")
       
        
        // taking the values from the array
        let book_title = book.books[i].title;
        let book_author = book.books[i].author;
        let book_pages = book.books[i].pages;
        let book_read = book.books[i].read;
     

       

        //  excluding the item in the last array
       
        // adding text to the items just created
        title.textContent=book_title;
        author.textContent=book_author;
        pages.textContent=book_pages;
        read.textContent=book_read;
                
        //appending the children to .content
        content.appendChild(title);
        content.appendChild(author);
        content.appendChild(pages);
        content.appendChild(read);
        content.appendChild(deleteBtn);
       
        // adding classes to it
        title.classList.add('bookTitle');
        author.classList.add("bookAuthor");
        pages.classList.add("bookPages");

        // conditionals > changes the class accourding the user's input: read/not read
        if(book.books[i].read === 'read'){
            read.classList.add("bookRead");
        }
        else{
            read.classList.add("bookUnRead");
        }
                  
    }
}

//adding book button
let addingBookButton = document.getElementById('addBtn');
addingBookButton.addEventListener('click' , function getTarget(e){
    e.preventDefault()
    // getting input from user
    let jsTitleInput = document.getElementById('titleInput').value;
    let jsAuthorInput = document.getElementById('authorInput').value;
    let jsPagesInput = document.getElementById('pagesInput').value + " pages";

    // getting input from radio buttons from user> read || not_read
    let form  = document.getElementById('form')
    let jsReadInput = form.elements["read"].value;
       
    let newBook = new Book(jsTitleInput, jsAuthorInput,jsPagesInput, jsReadInput);
  
    book.addBooks(newBook);
    addToHtml();
   
})