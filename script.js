let myLibrary= [];

function Book(title, author, pages, read){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;

    console.log
}
//nove knjige rucno dodane
let theHobbit= new Book("Hobbit", "J.R.R. Tolkin", 500, true);
let AnnaK= new Book("Ana Karenjina", "Lav Tolstoj", 420, false);



Book.prototype.info= function(){
    let procitano="";
    if(this.read=== true){
        procitano="Procitano"
    }else{
        procitano="Jos uvek nije procitano"
    }
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${procitano}`)

    
}

//Get form elements from HTML
const bookTitle= document.getElementById("titleInput");
const bookAuthor= document.getElementById("authorInput");
const bookPages= document.getElementById("pagesInput");
const bookReaded= document.getElementById("readedInput");

//funkcija za prikaz knjiga u biblioteci
function addBookToLib(){
    if(readedInput.value=="Readed" || readedInput.value=="Not Readed"){
        let bookMaker= new Book(bookTitle.value, authorInput.value, pagesInput.value, readedInput.value);
        myLibrary.push(bookMaker);
        bookShelf.innerHTML="";
        showMeBooks();
        bookTitle.value="";
        authorInput.value="";
        pagesInput.value="";
        readedInput.value="";
    }
    else{
    alert("Book can be Readed or Not Readed")
        readedInput.value="";
    }
    
}

const bookButt= document.getElementById("submitBook");

bookButt.addEventListener("click", addBookToLib);


// funkcija za prikaz svih knjiga
function showMeBooks(){
    for(let i=0; i<myLibrary.length; i++){
        bookReview(myLibrary[i])
    }
}
let bookShelf= document.querySelector(".myBooks");

// funkcija za dodavanje knjige
function bookReview(book){
    let newBook= document.createElement("div");
    newBook.className="book"
    bookShelf.appendChild(newBook);

    let naziv= document.createElement("div");
    newBook.appendChild(naziv);
    naziv.className= "info"
    naziv.textContent= book.title;

    let autor= document.createElement("div");
    newBook.appendChild(autor);
    autor.className= "info"
    autor.textContent= book.author;

    let strane= document.createElement("div");
    newBook.appendChild(strane);
    strane.className= "info"
    strane.textContent= book.pages;
    
    let procitao= document.createElement("div");
    newBook.appendChild(procitao);
    procitao.className= "info"
    procitao.textContent= book.read;

    let readed= document.createElement("button");
    newBook.appendChild(readed);
    readed.className= "butt"
    readed.innerHTML= "READED/NOT READED";

    //dodajemo atribut dugmetu
    readed.dataset.linkedName= book.title;

    readed.addEventListener("click", haveIReaded);

    function haveIReaded(){
        for(let i=0; i<myLibrary.length; i++){
            
            
            if(myLibrary[i].title== izbrisi.dataset.linkedName){
                if(myLibrary[i].read=="Readed"){
                    myLibrary[i].read= "Not Readed" ;
                }
                else{
                    myLibrary[i].read= "Readed" ;
                }
                
            }
        }
        bookShelf.innerHTML="";
        showMeBooks();
    }



    let izbrisi= document.createElement("button");
    newBook.appendChild(izbrisi);
    izbrisi.className= "butt"
    izbrisi.innerHTML= "DELETE";

    //dodajemo atribut dugmetu

    izbrisi.dataset.linkedName= book.title;

    izbrisi.addEventListener("click", delBook);
    // funkcija za brisanje knjige
    function delBook(){
        let delBookInd;
        for(let i=0; i<myLibrary.length; i++){
            
            
            if(myLibrary[i].title== izbrisi.dataset.linkedName){
                delBookInd=i;
                
            }
        }
        console.log(delBookInd);
        myLibrary.splice(delBookInd,1);
        console.log(myLibrary);
        bookShelf.innerHTML="";
        showMeBooks();
    }
}



showMeBooks();
