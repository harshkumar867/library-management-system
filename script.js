let books = [];

function addBook() {

    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;

    if (bookName === "" || authorName === "") {
        alert("Please fill all fields");
        return;
    }

    const book = {
        id: Date.now(),
        name: bookName,
        author: authorName
    };

    books.push(book);

    displayBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function displayBooks() {

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    books.forEach((book) => {

        const row = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>
                    <button class="delete-btn" onclick="deleteBook(${book.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        bookList.innerHTML += row;
    });
}

function deleteBook(id) {

    books = books.filter(book => book.id !== id);

    displayBooks();
}
