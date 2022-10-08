let myLibrary= [];

function Book(title, author, pages, read){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;

    console.log
}

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

theHobbit.info();

function addBookToLib(){
    myLibrary.push(theHobbit);
    createNewBook(theHobbit);
    myLibrary.push(AnnaK);
    createNewBook(AnnaK);
}
function createNewBook(name){
    let newBook= document.createElement("div");
    newBook.className="book"
    document.body.appendChild(newBook);

    let naziv= document.createElement("div");
    newBook.appendChild(naziv);
    naziv.className= "info"
    naziv.textContent= name.title;

    let autor= document.createElement("div");
    newBook.appendChild(autor);
    autor.className= "info"
    autor.textContent= name.author;

    let strane= document.createElement("div");
    newBook.appendChild(strane);
    strane.className= "info"
    strane.textContent= name.pages;
    
    let procitao= document.createElement("div");
    newBook.appendChild(procitao);
    procitao.className= "info"
    procitao.textContent= name.read;

    let readed= document.createElement("button");
    newBook.appendChild(readed);
    readed.className= "butt"
    readed.innerHTML= "READED/NOT READED";

    let izbrisi= document.createElement("button");
    newBook.appendChild(izbrisi);
    izbrisi.className= "butt"
    izbrisi.innerHTML= "DELETE";
}

addBookToLib();
console.log(myLibrary);