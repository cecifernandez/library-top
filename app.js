const readBtn = document.querySelector("#btn-read");
const notReadBtn = document.querySelector("#btn-notRead");
const deleteBtn = document.querySelector("#dlt-btn");
const addBtn = document.querySelector("#add-btn");
const title = document.querySelector("#book-title");
const author = document.querySelector("#book-author");
const pages = document.querySelector("#book-pages");
const status = document.querySelector("#btn-read");
const confirmBtn = document.querySelector("#confirm");
const cancelBtn = document.querySelector("#cancel");
const formBook = document.querySelector("#form-container");
const overlay = document.querySelector("#overlay-form");
const submitBook = document.querySelector("#new-book");

function changeStatus() {
  readBtn.addEventListener("click", () => {
    readBtn.style.display = "none";
    notReadBtn.style.display = "block";
  });
  notReadBtn.addEventListener("click", () => {
    readBtn.style.display = "block";
    notReadBtn.style.display = "none";
  });
}

changeStatus();

function addBook() {
  addBtn.addEventListener("click", () => {
    addBtn.style.display = "none";
    formBook.style.display = "flex";
    overlay.style.display = "block";
    confirmBtn.style.display = "block";
    cancelBtn.style.display = "block";
  });
}

addBook();

cancelBtn.addEventListener("click", () => {
  window.location.reload();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  formBook.style.display = "none";
  overlay.style.display = "none";
  confirmBtn.style.display = "none";
  cancelBtn.style.display = "none";
  addBtn.style.display = "block";
});

function deleteBook() {
  deleteBtn.addEventListener("click", () => {});
}

deleteBook();

let library = [];

function Book(title, author, pages, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);
}

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value, status);
  library.push(newBook);
  render();
}

function render() {
  submitBook.innerHTML = "";
  library.forEach((book) => {
    const bookEl = `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button class="status-btn-read" id="btn-read">${book.status}</button>
      <button class="status-btn-notRead" id="btn-notRead">Not read</button></td>
    

    <td><button class="dlt-btn" id="dlt-btn"><i class="fa-solid fa-trash-can delete-btn fa-lg"></i></button></td>

  </tr>`;
    submitBook.insertAdjacentHTML("afterend", bookEl);
  });
}
