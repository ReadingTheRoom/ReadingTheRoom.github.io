
const month = {
    feb23: '9780156001311'
}
const monthKeys = Object.keys(month)

const bookGen = async function (isbn) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const data = await res.json();
    const bookInfo = data.items[0].volumeInfo
    console.log(bookInfo)
    making(bookInfo, isbn)
    // volumeInfo
}
const gen = async function (isbn) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const data = await res.json();
    const bookInfo = data.items[0].volumeInfo
    console.log(bookInfo)
    individual(bookInfo, isbn)
    // volumeInfo
}

// async function bookGen(isbn) {
//     const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
//     const data = await res;
//     console.log(data)


// }

const making = async (book, isbn) => {
    const bookShelf = document.querySelector("#bookShelf");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h5");
    const bookImg = document.createElement("img");
    const bookLink = document.createElement("a")
    bookLink.href = `books/${isbn}.html`
    // img original size 307x475
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv");
    bookLink.classList.add("img");

    bookImg.classList.add("main");

    bookTitle.innerText = (book.title);
    bookAuthor.innerText = (`By: ${book.authors[0]}`);
    // bookDiv.style.backgroundImage = `url(https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg)`
    if (book.imageLinks.thumbnail === null) {
        bookImg.src = "https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img.jpg"

    }
    else {
        bookImg.src = (`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`)
        // bookImg.src = (book.imageLinks.thumbnail)
    }
    bookDiv.addEventListener("mouseover", () => { bookImg.classList.toggle("hide") });
    bookDiv.addEventListener("mouseout", () => { bookImg.classList.toggle("hide") });

    bookDiv.append(bookImg, bookTitle, bookAuthor, bookLink);
    bookShelf.append(bookDiv);

}

// for (const key in month) {
//     bookGen(`${month[key]}`)
// }


// function begin() {
//     for (let i = 0; i < (monthKeys.length); i++) {
//         console.log("start function")
//         let newbook = monthKeys[i];
//         console.log(newbook)

//         bookGen(month[newbook])
//     }
// }

const begin = () => { Object.values(month).forEach((val) => bookGen(val)) }


const individual = (book, isbn) => {
    const title = document.querySelector("#title")
    const subtitle = document.querySelector("#subtitle")
    const image = document.createElement("img")
    const year = document.querySelector("#year")
    const desc = document.querySelector("p")
    const rightcol = document.querySelector("#rightcol")
    title.innerText = (book.title);
    if (!book.subtitle) {

    }
    else {
        subtitle.innerText = (book.subtitle)
    }
    year.innerText = (`Published: ${book.publishedDate}`);
    desc.innerText = (book.description);
    image.src = (`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`)
    rightcol.append(image)




}