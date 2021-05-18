import { DOMSelectors } from "./DOM";
const query = async function () {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?age-group=16&api-key=IjOw569tP2k0fNoFgXAAiEG4R2g1C3fm"
    );
    const data = await response.json();
    data.results.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="book-cover">
      <img src="" alt="" class="cover">
  </div>
  <div class="book-info">
      <h3 class="name">${book.title}</h3>
      <h4 class="author">${book.author}</h4>
      <h4 class="description">${book.description}</h4>`);
  } catch (error) {
    console.log(error);
    alert("hey something went wrong");
  }
};
query();
