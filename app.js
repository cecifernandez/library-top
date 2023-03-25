const readBtn = document.querySelector("#btn-read");
const notReadBtn = document.querySelector("#btn-notRead");
const deleteBtn = document.querySelector("#dlt-btn");
const addBtn = document.querySelector("#add-btn");
const title = document.querySelector("#book-title");
const author = document.querySelector("#book-author");
const pages = document.querySelector("#book-pages");
const confirmBtn = document.querySelector("#confirm");
const cancelBtn = document.querySelector("#cancel");
const formBook = document.querySelector("#form-container");
const overlay = document.querySelector("#overlay-form");

let library = [];

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

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkFields();
  formBook.style.display = "none";
  overlay.style.display = "none";
  confirmBtn.style.display = "none";
  cancelBtn.style.display = "none";
  addBtn.style.display = "block";
});

function checkFields(event) {
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please, fill all the fields");
    event.preventDefault;
  } else {
    addBookToLibrary();
  }
}

function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value);
  library.push(newBook);
  render();
}

function render() {
  let table = document.querySelector("#table-body");
  table.innerHTML = "";

  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let bookRow = document.createElement("tr");
    bookRow.innerHTML = ` 
    
    <td class="td-class">${book.title}</td>
    <td class="td-class">${book.author}</td>
    <td class="td-class">${book.pages}</td>
    <td class="td-class">
    <input type="checkbox" class="checkbox" value="checkbox">
    </td>
    <td class="td-class"><button class="dlt-btn" id="dlt-btn" onclick="removeBook(${i})"><i class="fa-solid fa-trash-can delete-btn fa-lg"></i></button></td>`;

    table.appendChild(bookRow);
  }
}

function removeBook(index) {
  library.splice(index, 1);
  render();
}


